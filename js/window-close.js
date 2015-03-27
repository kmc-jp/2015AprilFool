var WindowClose = React.createClass({
  handleClick: function() {
    window.close();
  },
  render: function() {
    return (
      <button className="window-close" onClick={this.handleClick}>
        •Â‚¶‚é
      </button>
    );
  }
});

$(function() {
  $('.window-close').each(function() {
    React.render(
      <WindowClose />,
      $(this).get(0)
    );
  });
});