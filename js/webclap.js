var Webclap = React.createClass({
  handleClick: function() {
    var option = 'width=420,height=230,resizable=no,scrollbars=no,status=no';
    window.open('webclap.htm', null, option);
  },
  render: function() {
    return (
      <button className="webclap" onClick={this.handleClick}>
        &#65335;&#65349;&#65346;&#25293;&#25163;
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
