$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/caliburn.json',
    dataType: 'jsonp',
    success: function(response) {
      addCourses(response.courses.completed);
    }
  });

  function addCourses(courses) {

    var $badges = $('#badges');

    courses.forEach(function(course) {

      var $course = $('<div />', {
        'class': 'course'
      }).appendTo($badges);

      $('<h3>' + course.title + '</h3>').appendTo($course);

      $('<img />', {
        'src': course.badge
      }).appendTo($course);

      $('<a />', {
        'href': course.url,
        'target': '_blank',
        'class': 'btn btn-primary',
        text: 'See Course'
      }).appendTo($course);

    })

  }

});
