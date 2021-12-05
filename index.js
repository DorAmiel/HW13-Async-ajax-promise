//Ex1


const runEx1 = async() => {
    let tableOpacity = document.getElementById("ex1-table")
    tableOpacity.style.opacity = 1
    let userList = await getUsersFromServer()
    displayUsersInTable(userList)
}

const getUsersFromServer = () => {
    return new Promise((resolve, reject) => {
        const ajax = new XMLHttpRequest()
        ajax.onreadystatechange = () => {
            if (ajax.readyState === 4) {
                if (ajax.status === 200) {
                    const userListFromJson = JSON.parse(ajax.responseText)

                    resolve(userListFromJson)

                } else {
                    reject("Status is not OK")
                }
            }

        }
        ajax.open("GET", "https://jsonplaceholder.typicode.com/users")

        ajax.send()
    })

}

const displayUsersInTable = (userList) => {
    const userTableBody = document.getElementById("user-table-body-ex1")
    let tableRows = ''
    for (let userElements of userList) {
        tableRows += `
            <tr>
                <td>${userElements.name}</td>
                <td>${userElements.username}</td>
                <td>${userElements.email}</td>
                <td>${userElements.phone}</td>
                <td>${userElements.address.city}</td>
                <td>${userElements.address.street}</td>
                <td>${userElements.address.zipcode}</td>
                <td>${userElements.company.name}</td>
            </tr>
        `
    }
    userTableBody.innerHTML = tableRows
}


//Ex1


//Ex2

const runEx2 = async() => {
    let userInput = Number(document.getElementById("ex2-input").value)
    let userList = await getUserDataFromAjax(userInput)
    displayUserInPage(userList)
}

const getUserDataFromAjax = (userInput) => {
    return new Promise((resolve, reject) => {

        const ajax = new XMLHttpRequest()

        ajax.onreadystatechange = () => {
            if (ajax.readyState === 4) {
                if (ajax.status === 200) {
                    if (userInput < 10) {
                        let user = ajax.responseText
                        let userList = JSON.parse(user)
                        resolve(userList)
                    } else {
                        reject("Error, Page not found.")
                    }
                }
            }
        }
        let userURL = `https://jsonplaceholder.typicode.com/users/${userInput}`
        ajax.open("GET", userURL)
        ajax.send()
    })
}

const displayUserInPage = (userList) => {
    let user = document.getElementById("user-name-p-ex2")
    let userName = document.getElementById("user-username-p-ex2")
    let email = document.getElementById("user-email-p-ex2")
    let phone = document.getElementById("user-phone-p-ex2")
    let city = document.getElementById("user-city-p-ex2")
    let street = document.getElementById("user-street-p-ex2")
    let zipcode = document.getElementById("user-zipcode-p-ex2")
    let companyName = document.getElementById("user-companyname-p-ex2")

    user.innerHTML = `The name is: ` + userList.name
    userName.innerHTML = `The user name is: ` + userList.username
    email.innerHTML = `The email is: ` + userList.email
    phone.innerHTML = `The phone is: ` + userList.phone
    city.innerHTML = `The city is: ` + userList.address.city
    street.innerHTML = `The street is: ` + userList.address.street
    zipcode.innerHTML = `The zipcode is: ` + userList.address.zipcode
    companyName.innerHTML = `The company name is: ` + userList.company.name

}

//Ex2



//Ex3


const runEx3 = async() => {
    let userSelectInput = document.getElementById("inputGroupSelect01").value
    let userData = await getDataFromSelect(userSelectInput)
    displayUserDateBySelectTag(userData, userSelectInput)
}

const getDataFromSelect = (userSelectInput) => {
    return new Promise((resolve) => {
        let ajax = new XMLHttpRequest()
        ajax.onreadystatechange = () => {
            if (ajax.status === 200) {
                if (ajax.readyState === 4) {
                    let ajaxData = ajax.responseText
                    let jsonAjaxData = JSON.parse(ajaxData)
                    resolve(jsonAjaxData, userSelectInput)
                    console.log(jsonAjaxData)
                }
            }
        }


        let userURL = `https://jsonplaceholder.typicode.com/users/${userSelectInput}`
        ajax.open("GET", userURL)
        ajax.send()
    })
}

const displayUserDateBySelectTag = (jsonAjaxData) => {
    let user = document.getElementById("user-name-p-ex3")
    let userName = document.getElementById("user-username-p-ex3")
    let email = document.getElementById("user-email-p-ex3")
    let phone = document.getElementById("user-phone-p-ex3")
    let city = document.getElementById("user-city-p-ex3")
    let street = document.getElementById("user-street-p-ex3")
    let zipcode = document.getElementById("user-zipcode-p-ex3")
    let companyName = document.getElementById("user-companyname-p-ex3")

    user.innerHTML = `The name is: ` + jsonAjaxData.name
    userName.innerHTML = `The user name is: ` + jsonAjaxData.username
    email.innerHTML = `The email is: ` + jsonAjaxData.email
    phone.innerHTML = `The phone is: ` + jsonAjaxData.phone
    city.innerHTML = `The city is: ` + jsonAjaxData.address.city
    street.innerHTML = `The street is: ` + jsonAjaxData.address.street
    zipcode.innerHTML = `The zipcode is: ` + jsonAjaxData.address.zipcode
    companyName.innerHTML = `The company name is: ` + jsonAjaxData.company.name
}

//Ex3



//Ex4

const runEx4 = async() => {
    let tableOpacity = document.getElementById("ex4-table")
    tableOpacity.style.opacity = 1
    let photoList = await getPhotosDataFromAjax()
    displayPhotosOnTable(photoList)
}

const getPhotosDataFromAjax = () => {
    return new Promise((resolve, reject) => {
        let ajax = new XMLHttpRequest()
        ajax.onreadystatechange = () => {
            if (ajax.status === 200 || ajax.state === 4) {
                let ajaxPhotos = ajax.responseText
                let ajaxPhotosJson = JSON.parse(ajaxPhotos)
                resolve(ajaxPhotosJson)
                    // console.log(ajaxPhotosJson)
            }
        }
        ajax.open("GET", "https://jsonplaceholder.typicode.com/photos")
        ajax.send()
    })
}

const displayPhotosOnTable = (photoList) => {
    let photosTableBody = document.getElementById("user-table-body-ex4")
    tableRows = ''
    for (let photoElement of photoList) {
        tableRows += `
        <tr>
            <td>${photoElement.albumId}</td>
            <td>${photoElement.id}</td>
            <td>${photoElement.title}</td>
            <td><img src="${photoElement.thumbnailUrl}" </img></td>
        </tr>
        `
    }

    photosTableBody.innerHTML = tableRows
}

//Ex4


//Ex5

const runEx5 = async() => {
    let tableOpacity = document.getElementById("ex5-table")
    tableOpacity.style.opacity = 1
    let userPhoto = await getUserDataFromServer()
    displayUserWithPhotos(userPhoto)
}

const getUserDataFromServer = () => {
    return new Promise((resolve, reject) => {
        let ajax = new XMLHttpRequest()
        ajax.onreadystatechange = () => {
            if (ajax.status === 200 || ajax.state === 4) {
                let ajaxPhotos = ajax.responseText
                let ajaxPhotosJson = JSON.parse(ajaxPhotos)
                resolve(ajaxPhotosJson)
            }
        }


        ajax.open("GET", "https://reqres.in/api/users")
        ajax.send()
    })



}


const displayUserWithPhotos = (userPhoto) => {
    console.log(userPhoto)
    let photosTableBody = document.getElementById("user-table-body-ex5")
    tableRows = ''
    for (let photoElement of userPhoto) {
        tableRows += `
        <tr>
            <td>${photoElement.first_name}</td>
            <td>${photoElement.last_name}</td>
            <td>${photoElement.email}</td>
            <td><img src="${photoElement.avatar}" </img></td>
        </tr>
        `
    }

    photosTableBody.innerHTML = tableRows
}


//Ex5