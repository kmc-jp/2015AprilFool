#!/usr/bin/perl

use MIME::Base64;

require "cgi-lib.pl";
require "jcode.pl";

sub escape {
    my $str = $_[0];
    $str =~ s/&/&amp;/go;
    $str =~ s/</&lt;/go;
    $str =~ s/>/&gt;/go;
    $str =~ s/"/&quot;/go;
    $str =~ s/'/&#39;/go;
    $str;
}

print <<EOF;
Content-type: text/html; charset=UTF-8

<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <h1>掲示板</h1>

    <form method="post" action="bbs.cgi">
      <div>
        名前: <input type="text" name="name">
      </div>
      <div>
        本文
        <textarea name="body"></textarea>
      </div>
      <div>
        <input type="submit" value="送信">
      </div>
    </form>

    <hr>
EOF

&ReadParse(*form);
$body = $form{"body"};
$name = $form{"name"};

open(IN, "data.txt");
@log = <IN>;
close(IN);

if ($body ne "") {
  $encoded_body = encode_base64($body);
  chomp $encoded_body;
  $encoded_name = encode_base64($name);
  chomp $encoded_name;
  unshift @log, "$encoded_name<>$encoded_body\n";

  open(OUT, "> data.txt");
  print OUT @log;
  close(OUT);
}

foreach $data (@log) {
  @data = split(/<>/, $data);
  $decoded_name = escape(decode_base64($data[0]));
  $decoded_body = escape(decode_base64($data[1]));
  print <<EOF;
<div class="message">
  <span class="name">$decoded_name:</span>
  <span class="body">$decoded_body</span>
</div>
EOF
}

print <<EOF;
  </body>
</html>
EOF
