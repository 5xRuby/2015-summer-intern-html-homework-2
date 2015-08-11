function isValidGithubUserName(githubUserName){
 return  /^([a-zA-Z\d]){3}([a-zA-Z\d])*$/.test(githubUserName);
}

function buildRepoDomString(repo){
  var dom = '<div class="repo">'+ 
            '<h4>' + '<a href="' + repo.html_url + '" target="_blank">' + repo.full_name + '</a>'  + '</h4>'+
            '<p><span class="fa fa-arrow-right"></span> '+ (repo.description || "No description given.") + '</p>'+
            '<ul>'+
            '<li><span class="fa fa-star"></span> Star: ' + repo.stargazers_count + '</li>'+
            '<li><span class="fa fa-code-fork"></span> Fork: ' + repo.forks + '</li>'+
            '<li><img src="' + repo.owner.avatar_url + '" width="20" height="20" /> Owner: ' + repo.owner.login + '</li>'+
            '</ul>'
            '</div>';
  return dom;
}

function buildRepoListDomString(repoList){
  if (repoList.length === 0) {
    return '<div class="alert alert-danger" role="alert">Username exists, but no repo found.</div>'; 
  }

  var repoListDomString =  _.map(repoList, function(repo){
    return buildRepoDomString(repo); 
  }).join('');

  return repoListDomString;
}

$('#show').on('click', function(){
  var gihubUserName = $('#github_username').val();
  
  if (!isValidGithubUserName(gihubUserName)) {
    alert("The Github UserName You Typed is Not Valid");
    return;
  }
  
  $.ajax({
    url: 'https://api.github.com/users/' + gihubUserName + '/repos',
    method: 'GET',
    beforeSend: function(){
      $('.modal-title').text(gihubUserName + "'s Repo List");
      $('.modal-body').html('<img src="loading.gif" />'); 
      $('.modal').modal();
    }
  })
  .done(function(repoList){
    $('.modal-body').html(buildRepoListDomString(repoList));
  })
  .fail(function(){
    $('.modal-body').html('<div class="alert alert-danger" role="alert">Fail to load the Repo List of ' + gihubUserName + '</div>');
  });
});

$('#github_username').keyup(function(event){
  var ENTER = 13;
  if (event.which === ENTER) {
    $('#show').trigger('click');   
  }
});

$('.close-button').on('click', function(){
  $('.modal-body').html('');
});
