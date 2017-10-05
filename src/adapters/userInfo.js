class UserInfo {

  static sendUserInfo(userInfo) {
    const userJSON = JSON.stringify({image_url: userInfo})
    const jwtToken = localStorage.getItem("jwt")
    return fetch("http://localhost:3000/api/v1/add_picture", {
      method: 'post',
      body: userJSON,
      headers: {
        "Authorization": `Bearer ${jwtToken}`,
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).then(res => res.json())
  }
}

export default UserInfo