<script>
</script>

<div class="footer">
  <div class="footer_grid">
    <div class="footer_grid_col grid_col">
      <p class="footer_grid_title">Condizioni</p>
      <ul class="footer_grid_content">
        <li><a href="/legal/">Legal</a></li>
        <li><a href="/privacy/">Privacy</a></li>
      </ul>
    </div>
    <div class="footer_grid_col grid_col">
      <p class="footer_grid_title">Seguici</p>
      <ul class="footer_grid_content">
        <li>
          <a
            href="https://www.facebook.com//"
            target="_blank"
            rel="noopener noreferrer">Facebook</a
          >
        </li>
        <li>
          <a
            href="https://twitter.com//"
            target="_blank"
            rel="noopener noreferrer">Twitter</a
          >
        </li>
        <li>
          <a
            href="https://www.instagram.com//"
            target="_blank"
            rel="noopener noreferrer">Instagram</a
          >
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company//"
            target="_blank"
            rel="noopener noreferrer">Linkedin</a
          >
        </li>
      </ul>
    </div>
    <div class="footer_grid_col grid_col">
      <p class="footer_grid_title">Whynot</p>
      <ul class="footer_grid_content">
        <li><a href="/who/">Chi siamo</a></li>
        <li><a href="/team/">Team</a></li>
        <li>
          <a href="/invest/" target="_blank" rel="noopener noreferrer"
            >Investi in noi</a
          >
        </li>
        <li>
          <a href="/media" target="_blank" rel="noopener noreferrer"
            >Stampa &amp; Media</a
          >
        </li>
      </ul>
    </div>
  </div>
  <div class="footer_line"></div>
  <div class="footer_text">
    <p>Whynot Italia S.r.l - P.IVA 1234567890 - Via dei Pupi, 1 - 30172</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed</p>
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
  }

  @media (min-width: 576px) {
    .footer {
      width: 540px;
    }
  }

  .footer {
    padding: 0px 20px 2rem;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 0px;
    color: white;
  }

  .footer_grid {
    display: flex;
    flex-wrap: wrap;
    margin-top: -24px;
    margin-inline: -15px;
    padding-top: 1.5rem;
  }

  .footer_grid_col {
    margin-top: 24px;
    padding-inline: 15px;
  }

  .footer_grid_title {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .footer_grid_content {
    font-size: 1rem;
    list-style: none;
    padding-left: 0px;
    margin-bottom: 0px;
  }

  .footer_grid_content li a {
    font-size: 1rem;
  }

  .footer_line {
    height: 1px;
    background-color: rgb(238, 238, 238);
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .footer_text {
    font-size: 1rem;
  }

  @media (min-width: 1200px) {
    .footer {
      width: 1140px;
    }
  }
</style>
