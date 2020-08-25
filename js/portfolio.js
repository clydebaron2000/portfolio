console.log(data);
console.log(data.deployableProjectsDraft);
data.deployableProjectsDraft.forEach(project => {
    $('#portfolio').append($(`<div class="card col-md-6 col-sm-12">`).append($(`<a href="${project.link}">`).append($(`<img class="card-image-top" src="${project.img}" alt="${project.name} Website">`)).append($(`<div class="card-body">`).append($(`<h4 class="card-title">`).text(project.name)))));
});