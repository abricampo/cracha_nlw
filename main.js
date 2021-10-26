const linksSocialMedia = {
  github: 'abricampo',
  youtube: 'abricampo1',
  facebook: 'joseabricampo',
  instagram: 'abricampo',
  twitter: 'abricampo'
}

function changeSocialMediaLinks() {
  document.getElementById('userName').textContent = 'José Abricampo'
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    console.log(li.children[0].href)
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
