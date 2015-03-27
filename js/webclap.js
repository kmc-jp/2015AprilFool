var Webclap = React.createClass({
  handleClick: function() {
    var option = 'width=420,height=230,resizable=no,scrollbars=no,status=no';
    window.open('webclap.html', null, option);
  },
  render: function() {
    return (
      <button className="webclap" onClick={this.handleClick}>
        Web拍手
      </button>
    );
  }
});

$(function() {
  $('.webclap').each(function() {
    React.render(
      <Webclap />,
      $(this).get(0)
    );
  });
});