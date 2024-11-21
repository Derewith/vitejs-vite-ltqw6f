<script>
</script>

<div style="background-color:#e95f3b">
  <div class="footer">
    <div class="footer_logo">
      <img src="public/logo.png" alt="logo" height="30" width="90" />
    </div>
    <div class="footer_grid flex-col">
      <div class="footer_grid_col grid_col">
        <ul class="footer_grid_content">
          <li><a href="/collaboration/">Collabora con noi</a></li>
          <li>
            <a href="/personalized-solutions/">Soluzioni personalizzate</a>
          </li>
          <li><a href="/legal/">Legal</a></li>
          <li><a href="/privacy/">Privacy</a></li>
        </ul>
      </div>
    </div>
    <div class="footer_line"></div>
    <div class="footer_socials">
      <ul>
        <li class="fab fa-instagram">
          <a target="_blank" href="https://www.instagram.com/whynotapp2024/">
          </a>
        </li>
        <li class="fab fa-facebook">
          <a target="_blank" href="https://www.facebook.com//"> </a>
        </li>
        <li class="fab fa-twitter">
          <a target="_blank" href="https://twitter.com//"> </a>
        </li>
        <li class="fab fa-linkedin">
          <a target="_blank" href="https://www.linkedin.com/company//"> </a>
        </li>
      </ul>
    </div>
    <div class="footer_text">
      <p>Whynot Italia S.r.l - P.IVA 1234567890 - Via dei Pupi, 1 - 30172</p>
      <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed</p> -->
    </div>
  </div>
</div>

<style>
  @media (min-width: 1200px) {
    .footer {
      width: 1140px;
    }
  }

  @media (min-width: 992px) {
    .footer {
      width: 960px;
    }
  }

  @media (min-width: 768px) {
    .footer {
      width: 720px;
      padding-top: 0px;
      padding-bottom: 1.2rem;
      padding-right: 15px;
      padding-left: 15px;
    }
    .grid_col {
      flex-basis: 0px;
      -webkit-box-flex: 1;
      flex-grow: 1;
      max-width: 100%;
    }
  }

  .grid_col {
    position: relative;
    width: 100%;
    text-align: center;
  }

  @media (min-width: 576px) {
    .footer {
      width: 540px;
    }
  }

  .footer_logo {
    padding: 30px 0 0 0;
  }

  .footer_logo img {
    filter: brightness(0%) invert(1);
  }

  .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 20px 2rem;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 0px;
    color: white;
    user-select: none;
  }

  .footer_grid {
    display: flex;
    margin-top: -24px;
    /* margin-inline: -15px; */
    padding-top: 1.5rem;
  }

  .footer_grid_col {
    margin-top: 14px;
    padding-inline: 15px;
  }

  .footer_grid_title {
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 800;
    margin-bottom: 0.5rem;
  }

  .footer_grid_content {
    font-size: 1rem;
    list-style: none;
    padding-left: 0px;
    margin-bottom: 5px;
  }

  .footer_grid_content li {
    margin: 8px 0;
  }

  .footer_grid_content li a {
    font-size: 0.8rem;
    text-transform: uppercase;
    font-weight: 500;
    color: white !important;
  }

  .footer_line {
    width: 50%;
    height: 1px;
    background-color: rgb(238, 238, 238);
  }

  .footer_text {
    font-size: 0.7rem;
  }

  .footer_socials {
    margin-top: 1rem;
  }

  .footer_socials ul li {
    font-size: 40px;
    padding: 0 10px;
    /* margin: 15px 15px 0; */
    cursor: pointer;
  }

  @media (min-width: 1200px) {
    .footer {
      width: 1140px;
    }
  }
</style>
