<template>
    <div class="container-fluid contact mt-5">
    <div class="container py-4 mt-5">
        <div class="row mb-5">
        <h1 class="text-center">Contact</h1>
        <p class="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ea
          excepturi! Repellendus aliquid recusandae libero!
        </p>
      </div>
      <div class="row"></div>
      <div class="row">
        <div class="col-lg-6">
          <form
            action=""
            method="post"
            class="php-email-form"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="row gy-4">
              <div class="col-md-6">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  placeholder="Your Name"
                  required=""
                />
              </div>

              <div class="col-md-6">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  placeholder="Your Email"
                  required=""
                />
              </div>

              <div class="col-md-12">
                <input
                  type="text"
                  class="form-control"
                  name="subject"
                  placeholder="Subject"
                  required=""
                />
              </div>

              <div class="col-md-12">
                <textarea
                  class="form-control"
                  name="message"
                  rows="6"
                  placeholder="Message"
                  required=""
                ></textarea>
              </div>

              <div class="col-md-12">
                <button class="btn btn-primary" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="col">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11526.395241716902!2d-15.982099970225542!3d18.092676391378745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe964d85603d4589%3A0x85cb4b6b96255f8c!2sImmobili%C3%A8re%20Mauritanie%20de%20GENIE!5e0!3m2!1sfr!2s!4v1733673369562!5m2!1sfr!2s"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
  <footer id="footer" class="footer light-background">
    <div class="container foot">
      <div class="row gy-3 row-foot">
        <div class="col-lg-3 col-md-6 d-flex">
          <i class="bi bi-geo-alt icon icone"></i>
          <div class="address">
            <h4>Address</h4>
            <p>Skar</p>
            <p></p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 d-flex">
          <i class="bi bi-telephone icon icone"></i>
          <div>
            <h4>Contact</h4>
            <p>
              <strong>Phone:</strong> <span>+222 48896520</span><br />
              <strong>Email:</strong> <span>info@example.com</span><br />
            </p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <h4>Suivez-nous</h4>
          <div class="social-links d-flex">
            <a href="#" class="twitter"><i class="bi bi-twitter-x"></i></a>
            <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
            <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>© <span>Copyright</span></p>
    </div>
  </footer>
</template>

<script setup>
</script>