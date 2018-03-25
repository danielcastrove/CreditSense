list = [
  'id',
  'dti',
  'inq_last_6mths',
  'open_acc',
  'emp_length_num',
  'revol_util',
  'grade',
  'payment_inc_ratio',
  'purpose',
  'delinq_2yrs_zero',
  'pub_rec_zero',
  'pub_rec',
  'short_emp',
  'home_ownership',
  'sub_grade_num',
  'last_major_derog_none',
  'last_delinq_none',
  'delinq_2yrs'
];

var obj = {
  id: '1077501',
  delinq_2yrs_zero: '0',
  delinq_2yrs: '12',
  dti: '27.65',
  emp_length_num: '10',
  grade: 'B',
  home_ownership: 'RENT',
  payment_inc_ratio: '10.85',
  inq_last_6mths: '1',
  last_major_derog_none: '2.76',
  last_delinq_none: '7.87',
  open_acc: '3',
  pub_rec_zero: '1.87',
  pub_rec: '753',
  short_emp: '1921',
  purpose: 'credit_card',
  revol_util: '83.7',
  sub_grade_num: 'B2'
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.onload = function() {
  var x = document.getElementById('submit');
  x.onclick = function() {
    var xhttp = new XMLHttpRequest();
    xhttp.open('POST', 'http://localhost:5000/add_application', true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    for (i in obj) {
      document.getElementById(i).defaultValue = obj[i];
    }

    var data = {};
    data['id'] = getRandomInt(1, 10000).toString();
    for (var i = 0; i < list.length; i++) {
      var val = document.getElementById(list[i]).value;
      data[list[i]] = val;
    }
    console.log(data);
    var lamda = JSON.stringify(data);
    xhttp.send(lamda);

    xhttp.onload = function(data) {
      if (data['status'] === 'success') {
        alert('Your application has been received');
      } else {
        alert('error');
      }
    };
  };
};
