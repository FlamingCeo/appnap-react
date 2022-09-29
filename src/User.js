class User {

    constructor() {
        this.init()
    }

    init() {
        this.name = localStorage.getItem('userName')
        this.email = localStorage.getItem('userEmail')
        this.loggedIn = localStorage.getItem('userLoggedIn')
    }

    /**
     *
     * @param data object
     * @param data.name string
     * @param data.email string
     * @param callback function
     */
    authenticated(data, callback) {
        console.log(data)
        localStorage.setItem('userEmail', data[0].email)
        localStorage.setItem('role', data[0].role)
        localStorage.setItem('userLoggedIn', true)
        localStorage.setItem('token', data.token)
    }

    /**
     *
     * @return {boolean}
     */
    isLoggedIn() {
        return Boolean(this.loggedIn) === true
    }
}

export default new User()