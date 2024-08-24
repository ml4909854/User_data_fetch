

let btn = document.getElementById("button")

        let container = document.getElementById("container")

        function getdata() {

            fetch("https://reqres.in/api/users")
                .then(function (res) {
                    return res.json()
                }).then(function (res) {
                    console.log(res.data)
                    shodwdata(res.data)
                })
        }

//         {
//     "id": 1,
//     "email": "george.bluth@reqres.in",
//     "first_name": "George",
//     "last_name": "Bluth",
//     "avatar": "https://reqres.in/img/faces/1-image.jpg"
// }

        function shodwdata(data) {
            data.forEach(function (ele) {

                let div = document.createElement("div")

                let image = document.createElement("img")
                image.src = ele.avatar

                let p1 = document.createElement("p")
                p1.innerHTML = ele.id

                let p2 = document.createElement("p")
                p2.innerHTML = `${ele.first_name} `

                let p3 = document.createElement("p")
                p3.innerHTML = `${ele.last_name}`

                let p4 = document.createElement("p")
                p4.innerHTML = ele.email


                div.append(image, p1, p2, p3 , p4)
                container.append(div)
            });
        }
        btn.addEventListener("click", function () {
            getdata()
        })

