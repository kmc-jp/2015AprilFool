var WebClap = React.createClass({
  render: function() {
    return (
      <button className="webclap">
        Web拍手
      </button>
    );
  }
});

$(function() {
  $('.webclap').each(function() {
    React.render(
      <WebClap />,
      $(this).get(0)
    );
  });
});