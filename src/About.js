import React, { Component } from 'react';

class About extends Component {

    render() {
        return (
            <div>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="images/WhatsApp Image 2021-09-01 at 9.26.28 AM.jpeg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
    <img src="..." class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="images/WhatsApp Image 2021-09-01 at 9.26.28 AM.jpeg" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            </div>

        )
    }
}

export default About;