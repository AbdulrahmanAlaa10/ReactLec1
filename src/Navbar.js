import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (

            <div className='navabr' >
                {/* <h1>hello navbar</h1>
                <h1>My Name Is : {this.props.name}</h1>
                <h1>My Age is :{this.props.age}</h1>
                <h1>My Job Is :{this.props.job}</h1> */}



                <nav>
                        <div class="nav-left">
                            <i class="fab fa-facebook"></i>
                            <div class="search">
                                <input type="text" placeholder="Search Facebook" />
                                <i class="fas fa-search"></i>
                            </div>
                        </div>

                        <div class="nav-middle">
                            <a href="#" class="active">
                                <i class="fa fa-home"></i>
                            </a>

                            <a href="#">
                                <i class="fas fa-tv"></i>
                            </a>

                            <a href="#">
                                <i class="fas fa-store"></i>
                            </a>

                            <a href="#">
                                <i class="fa fa-users"></i>
                            </a>
                            <a href="">
                                <i class="fas fa-puzzle-piece"></i>
                            </a>
                        </div>

                        <div class="nav-right">
                            <div class="profile">
                                <img src="images/WhatsApp Image 2021-09-01 at 9.26.28 AM.jpeg" alt="user" />
                                <p>Abdulrahman</p>
                            </div>
                            <a href="#">
                                <i class="fas fa-bars"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-facebook-messenger"></i>
                            </a>
                            <a href="#">
                                <i class="fa fa-bell"></i>
                            </a>
                            <a href="#">
                                <i class="fas fa-caret-down"></i>
                            </a>
                        </div>
                </nav>
            </div>
            

        )
    }
}

export default Navbar;