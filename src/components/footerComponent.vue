<template>
  <!-- Footer -->
  <section id="footer">
    <div class="container">
      <div class="row text-center text-xs-center text-sm-left text-md-left">
        <div class="col-xs-12 col-sm-4 col-md-4">
          <h5>About</h5>
          <ul class="list-unstyled quick-links">
            <li>
              <a href="#"><i class="fa fa-angle-double-right"></i>AboutUs</a>
            </li>
            <li>
              <a href="#"
                ><i class="fa fa-angle-double-right"></i>Corporate Sale</a
              >
            </li>
            <li>
              <a href="#"
                ><i class="fa fa-angle-double-right"></i>Terms & Policy</a
              >
            </li>
            <li>
              <a href="#"><i class="fa fa-angle-double-right"></i>Community</a>
            </li>
            <li>
              <a href="#"><i class="fa fa-angle-double-right"></i>Privacy</a>
            </li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-4">
          <h5 >Policy</h5>
          <ul class="list-unstyled quick-links">
            <li>
              <a href="#"><i class="fa fa-angle-double-right"></i>Return</a>
            </li>
            <li>
              <a href="#"><i class="fa fa-angle-double-right"></i>Security</a>
            </li>
            <li>
              <a href="#"><i class="fa fa-angle-double-right"></i>Privacy</a>
            </li>
            <li>
              <a href="#"><i class="fa fa-angle-double-right"></i>Sitemap</a>
            </li>
            <li>
              <a href="#"><i class="fa fa-angle-double-right"></i>Refund</a>
            </li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-4">
          <h5 >Social</h5>
          <ul class="list-unstyled quick-links">
            <li>
              <a href="#"
                ><i class="fa fa-angle-double-right"></i
                ><i class="fa-brands fa-google"></i
              ></a>
            </li>
            <li>
              <a href="#"
                ><i class="fa fa-angle-double-right"></i
                ><i class="fa-brands fa-instagram"></i
              ></a>
            </li>
            <li>
              <a href="#"
                ><i class="fa fa-angle-double-right"></i
                ><i class="fa-brands fa-linkedin"></i
              ></a>
            </li>
            <li>
              <a href="#"
                ><i class="fa fa-angle-double-right"></i
                ><i class="fa-brands fa-facebook"></i
              ></a>
            </li>
            <li>
              <a href="#"
                ><i class="fa fa-angle-double-right"></i
                ><i class="fa-brands fa-whatsapp"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>

      <div class="row">
        <div
          class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white"
        >
          <p>
            <u
              ><a href="#"
                >E-store web application</a
              ></u
            >
            is a Registered MSP/ISO of Elavon, Inc. 
          </p>
          <p class="h6">
            © 2023 All right Reversed.<a
              class="text-green ml-2"
              href="https://pf.com.pk/"
              target="_blank"
              >House Of Programmers Force</a
            >
          </p>
        </div>
        <hr />
      </div>
    </div>
  </section>
  <!-- ./Footer -->
</template>

<script>
export default {};
</script>

<style>


section .section-title {
  text-align: center;
  color: #157347;
  margin-bottom: 10px;
  text-transform: uppercase;
}
#footer {
  background: #157347 !important;
  margin-top: 10px;
}
#footer h5 {
  
  padding-bottom: 6px;
  margin-bottom: 20px;
  color: #ffffff;
}
#footer a {
  color: #ffffff;
  text-decoration: none !important;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}
#footer ul.social li {
  padding: 3px 0;
}
#footer ul.social li a i {
  margin-right: 5px;
  font-size: 25px;
  -webkit-transition: 0.5s all ease;
  -moz-transition: 0.5s all ease;
  transition: 0.5s all ease;
}
#footer ul.social li:hover a i {
  font-size: 30px;
  margin-top: -10px;
}
#footer ul.social li a,
#footer ul.quick-links li a {
  color: #ffffff;
}
#footer ul.social li a:hover {
  color: #eeeeee;
}
#footer ul.quick-links li {
  padding: 3px 0;
  -webkit-transition: 0.5s all ease;
  -moz-transition: 0.5s all ease;
  transition: 0.5s all ease;
}
#footer ul.quick-links li:hover {
  padding: 3px 0;
  margin-left: 5px;
  font-weight: 700;
}
#footer ul.quick-links li a i {
  margin-right: 5px;
}
#footer ul.quick-links li:hover a i {
  font-weight: 700;
}

@media (max-width: 767px) {
  #footer h5 {
    padding-left: 0;
    border-left: transparent;
    padding-bottom: 0px;
    margin-bottom: 10px;
  }
}
</style>
