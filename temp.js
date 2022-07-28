const profilePictures = document.querySelectorAll("[data-profile-picture]");
const profileCardContainer = document.querySelector(".profile-card-container");
const profileCardImage = document.querySelector("[data-profile-image]");
const profileCardUsername = document.querySelector("[data-card-username]");
const profileCardProfession = document.querySelector("[data-card-profession]");
const profileCardPosts = document.querySelector("[data-card-posts]");
const profileCardFollowing = document.querySelector("[data-card-following]");
const profileCardFollowers = document.querySelector("[data-card-followers]");
const profileThumbnail = document.querySelector(".profile-thumbnail");
const professions = ["Data-Analyst", "Entrepreneur", "Software-Engineer"];
const profileAnalyticsData = [
  {
    posts: 1456,
    following: 1234,
    followers: 63456,
  },
  {
    posts: 1889,
    following: 1567,
    followers: 34563,
  },
  {
    posts: 1243,
    following: 4566,
    followers: 456454,
  },
];

profilePictures.forEach((picture, index) => {
  picture.onclick = function (e) {
    profileCardContainer.classList.toggle("show");
    profileThumbnail.classList.toggle("show");
    renderData(e, index);
  };
});

function renderData(e, index) {
  profileCardImage.src = e.target.src.slice(22);
  profileCardUsername.innerText =
    e.target.parentElement.nextElementSibling.children[0].children[0].children[0].innerText;
  profileCardProfession.innerText = professions[index];
  profileCardPosts.innerText =
    profileAnalyticsData[index].posts.toLocaleString();
  profileCardFollowing.innerText =
    profileAnalyticsData[index].following.toLocaleString();
  profileCardFollowers.innerText =
    profileAnalyticsData[index].followers.toLocaleString();
  profileThumbnail.children[0].src = e.target.src.slice(22);
}
