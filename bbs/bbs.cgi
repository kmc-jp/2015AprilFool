#!/usr/bin/perl

use MIME::Base64;

require "cgi-lib.pl";

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
      <textarea name="message"></textarea>
      <input type="submit" value="送信">
    </form>

    <hr>
EOF

&ReadParse(*form);
$message = $form{"message"};

open(IN, "data.txt");
@log = <IN>;
close(IN);

if ($message ne "") {
  $encoded_message = encode_base64($message);
  unshift @log, "$encoded_message\n";

  open(OUT, "> data.txt");
  print OUT @log;
  close(OUT);
}

foreach $data (@log) {
  $decoded_message = escape(decode_base64($data));
  print "<div class='message'>$decoded_message</div>\n";
}

print <<EOF;
  </body>
</html>
EOF
