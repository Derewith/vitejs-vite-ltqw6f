<script>
</script>

<nav class="wrapper">
    <div class="wrapper-inside">
        <div class="logo-ctn">
            <a href="/" class="logo-wrapper">
                <img
                    src="/public/logo.png"
                    alt="logo"
                    height="30"
                    width="90"
                />
            </a>
        </div>
        <ul class="menu-ctn">
            <li class="menu-item">
                <a href="/who" target="_blank" rel="noopener noreferrer"
                    >Chi siamo</a
                >
            </li>
            <li>
                <div class="menu-divider"></div>
            </li>
        </ul>
        <button
            class="menu-btn"
            data-collapse-toggle="navbar-default"
            type="button"
            aria-controls="navbar-default"
            aria-expanded="false"
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14.088 13.249"
                width="1rem"
                height="1rem"
                ><g
                    fill="none"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    stroke="currentColor"
                    ><path d="M.75 12.499h12.588"></path><path
                        d="M.75 6.624h12.588"
                    ></path><path d="M.75.75h12.588"></path></g
                ></svg
            ></button
        >
        <div class="menu-last">
            <button class="mainbtn">Newsletter</button>
        </div>
    </div>
</nav>
<div class="hidden w-full" id="navbar-default">
    <ul
        class="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50"
    >
        <li>
            <a
                href="#"
                class="block py-2 px-3 text-white bg-amber-700 rounded hover:text-white"
                aria-current="page">Home</a
            >
        </li>
        <li>
            <a
                href="#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                >About</a
            >
        </li>
        <li>
            <a
                href="#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                >Services</a
            >
        </li>
        <li>
            <a
                href="#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                >Pricing</a
            >
        </li>
        <li>
            <a
                href="#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                >Contact</a
            >
        </li>
    </ul>
</div>

<style>
    .wrapper {
        position: sticky;
        display: flex;
        top: 0px;
        background-color: white;
        -webkit-box-align: center;
        align-items: center;
        margin-bottom: 1.5rem;
        padding: 0px;
        z-index: 1100;
    }

    .wrapper-inside {
        display: flex;
        flex-wrap: wrap;
        -webkit-box-align: stretch;
        align-items: stretch;
        -webkit-box-pack: justify;
        justify-content: space-between;
        width: 100%;
        padding: 0px 20px;
        margin-right: auto;
        margin-left: auto;
    }

    .logo-ctn {
        display: block;
    }

    .logo-wrapper {
        display: inline-flex;
        margin: 0.7rem 0px;
        height: 30px;
        color: rgb(41, 4, 2);
        text-decoration: underline;
    }

    .menu-ctn {
        list-style: none;
        flex-direction: column;
        margin-left: auto;
        margin-bottom: 0px;
        padding-left: 0px;
        -webkit-box-align: center;
        align-items: center;
        display: none;
    }

    .menu-item,
    .menu-item a {
        color: rgb(41, 4, 2);
        text-decoration: none;
    }

    .menu-item {
        position: relative;
        display: block;
        font-size: 1rem;
        font-weight: 400;
        padding: 0.3rem 0.7rem;
    }

    .menu-divider {
        display: none;
        width: 1px;
        background-color: rgb(222, 222, 222);
        height: 25px;
        margin: 0.3rem 0.7rem;
    }

    .menu-btn {
        border: none;
        background: transparent;
        color: rgb(0, 0, 0);
        padding-inline: 1rem;
    }

    .menu-last {
        display: none;
    }

    @media (prefers-reduced-motion: no-preference) {
        .wrapper {
            transition-property: transform, box-shadow;
            transition-duration: 200ms;
            transition-timing-function: ease-in-out;
        }
    }

    @media (min-width: 576px) {
        .wrapper-inside {
            width: 540px;
        }
    }
    @media (min-width: 768px) {
        .wrapper {
            padding: 0.5rem 1rem;
        }
        .wrapper-inside {
            width: 720px;
            padding-top: 0px;
            padding-bottom: 0px;
            padding-right: 15px;
            padding-left: 15px;
        }
    }
    @media (min-width: 992px) {
        .wrapper-inside {
            flex-wrap: nowrap;
            width: 960px;
        }
        .logo-ctn {
            display: block;
            align-self: center;
            margin-inline-start: 1rem;
        }
        .menu-ctn {
            flex-direction: row;
            -webkit-box-align: center;
            align-items: center;
            display: flex;
        }
        .menu-divider {
            display: block;
        }
        .menu-last {
            display: block;
            align-self: center;
            margin-inline-start: 1rem;
        }
        .menu-btn {
            display: none;
        }
    }
    @media (min-width: 1200px) {
        .wrapper-inside {
            width: 1140px;
        }
        .menu-item {
            padding: 0.7rem 1rem;
        }
        .menu-divider {
            margin: 0.7rem 1rem;
        }
    }
</style>
