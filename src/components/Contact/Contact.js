import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false
    };
  }
  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  render() {
    return (
      <div className="contact-container">
        <div className="container contact-content">
          <div className="row">
            <h1 className="contact-title">Let's Connect!</h1>
          </div>
          <div className="row contact-row">
            <div className="col-sm-6 column">
              <div className="me-pic">
                <img
                  src="https://lh3.googleusercontent.com/q4RmFnhkbD1uTfkieAhxGWJGLnyikDxKNwvdWSGr-c0gZTDSlBrGQAHUlIGwd4ytkiibuiJZ2XIohk-iOh6XsICUGm5AxzxYwxyQ-eL7pjPmkhAA98OXjMI_OYcE4iQZCvh5FfzkW9AZ3xnH26ebv9Eb2hf9c3QcEqzmkgP_bW1Tue6WzouVkeeOXV5bLZ9zgRqm9WONjP-BsGTZ3OOUjzzSScElcOMInLhq4C3TD50VyDUOhA_KDDiQnaoOoNJzY4q9R5HtrVrlTSLT0u65XZMX3BiAlgDp3UWZoOyeNPPbufUeu4oLr7_I5tB8Ls5MUI6EVKz2ysepAuK6W2ericGbaQMz9zwfr6REurkE84llioxXx1DrcC55qK4ncJ-KUYJ3hR9U_w1OnaQbqDwrD3iMDgTs07Jo6edcZ40Tu9pW1howCES7DWZzgH1kf2RwRsiAxNpP_yrpytBbOMIXHUr8pe1QVsOjo5AiyN8QuIpYh1kqQCSuwdKEoXqWucPTIh01mMDbKzvAZmkpZEd440NniDIxO5gw7hJFbogWduld063kM5cnlpoqRiE2sHWwiDstb4XvPPXWW9wwBNaQjznQPWyR1O0UIr3jTA=w805-h803-no"
                  alt="Me"
                  className="profile"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="row contact-row-2">
                <div className="col-sm-3">
                  <a
                    href="#"
                    onMouseEnter={this.handleMouseHover}
                    onMouseLeave={this.handleMouseHover}
                  >
                    <img
                      className="contact-icon"
                      src="https://lh3.googleusercontent.com/ELhkIS-ikr-bktu-NPrGm350klaaMg_m3PSSI3SWYtkYqzH_UrBr-Gi039GGuYV-fL2Jl8NUEX2mPAG3RCPHvv_sn14J_orc94VBUQYRNe-jE4Tr4aOrfWeNxdNx85bw1vYP4amJEScLdlhz2ONjnV3uXgVyPK9y5bZzDlyRH0sECarhnLwxxwszfWsb2bpWcrx8iAWvqgyxVGBdj-EeQUXVGi3Bsdw7XmdlGqenkU1lxAH0r73-fw2muQG0jNW6vT-LKGsukAMD0Obj3mDTCRB5JC79sz4jRFQnsYHHOCOL52EHEe06ITH1HxKYFRUbHP0dH77J3yC5cXjviEYN-gbbpcut3ueOaenVi-QLV4HldTZxAsfhHI_q8QS0gGI4CHzAlW8oAop8jf62IQxz9-ZtZFFEuc41G0UewYPG4UJM-j7R8R8ITlPb9VJD9oai2eT-PG8P-Gv5ZYC5kha_GS49uwyNYmqambtkW_DqZXQpmoaLzCotW9OtHe6CMzIuO5Z_Fl0ANcZ03CaCWZf0CYOqwH32FC9kFHlaL9DzLfE-CrGyDgDaK4Kmt7WZjlynVFcA1BRHykfsGofM0MNNiitoiTF-VHMuHv6PdA=s256-no"
                      alt="location"
                    />
                  </a>

                  {this.state.isHovering && (
                    <div className="hovering-div">
                      <p className="location">Newport Beach, CA</p>
                      <p className="location-2">
                        Interested in remote and relocation opportunities!
                      </p>
                    </div>
                  )}
                </div>
                <div className="col-sm-3">
                  <a href="mailto:rebbbeccao@gmail.com">
                    <img
                      className="contact-icon"
                      src="https://lh3.googleusercontent.com/FFzLvYecvNlUFXsNsfPr1M_AJGLHcvfHJXOnEFQoOHUY6VkK_yiD-eOQF1nHjK5t9sj6_gDIfI8nhsscuDm8GEfNha8X4ZN86ZgVlGZIcYfSnuGgdv5_gU8EczkmK4yl_qiOn4Gzn4DxyMkNpwffQIjWG3YOp4EcmXB3C4Dzwbks8up71cRPm0gSaOUvJ9BVNkWDSiqlaHg9xGlAHCIkgXhJixfEOfB-72tv3brhOP4D3_MRvr4Wgoz57JMFtywE1gfpOUmJSsGaYySTlqNCfD5-fxPyBXlwDiM7w_uFSqS7SD5nDoV_S5c-v0TRm0MISAM46UNjhFvMVm5caYiJH51lQJYgX46Up5ow6E5TvHEh3ODncA1MZcMXa7m2_SRCSEbtFOS50jiPCFuC6T8xO7lhaWfwCVbBs3hKoOl7sucr3LzICrm51gCYMl4nYRI_z4gWmP479smSwmbRkTT7kjAfX5F9BJOtNKlQZXO_Fw5OY1wp3rqRpRkHmlay1xh8_tAxCrF9SFrCUg7HCKsgelzScoHHNM4Gnx62-4skbTVhZXNlyNRJfDOBI6P2nDwQ72mFMLgHJ0LadrxgTCkfpX0Y4_hRGwsh1uh5Jg=s256-no"
                      alt="email"
                    />
                  </a>
                </div>
                <div className="col-sm-3">
                  <a href="https://github.com/rebbbeccao">
                    <img
                      className="contact-icon"
                      src="https://lh3.googleusercontent.com/gutAZiD4Gq2X4NryvtcZXdbgUj6XsCZ9hH1F4IubMsRh2hagpjfvHEqO6H5YJiPesHCxYjha-dEaulErNmUA3a2IWO4f6mWhBifYJNw5c11VrUHd3dCOtE3InG1EGMnqeLoMMn7xJApX_N8SP9462ArIjVjFHAH_-kuv3ibI_1uIB1E4hur0-mZaHJy6p8GqanPC91T4-zs6DMvysBkEZBJJ9VOf1HLNrohIcpoQvcTBlvRtafR8zYNDllOgtsCPwndGPDJ6uUZhV5-oiYJfP_eNCXOpDvSIUobMUrLn0S21BdHHR9EejCMqrEN-TkPmamaQEdPUNalUITuNCcxGJ6i_qh0esSK7baKxAw3Pe8psNFVy8FT-LKENmjMgbc7OUyrmA2zwNXlk-zt2WDfpWi6if7Nvq9KLenw_2AkuZ-7YwCG9DpgoMm9TuzbvsQ2gV-cQp-zipJFK2Byvhx2S7JKlnRFE0lTh21iSibWDFcFsUe0tb4Bo6JbZAmSvXvjDEVcz9a4H93zZSqfsqJCcEo5iP1cMhdmsI70L7hrrbpHCRuSbhUzTpRmBy1RODvLKxRgpGRqXr9EV-d6_-EOVU8ZQIhsoFlTywS8B0w=s256-no"
                      alt="github"
                    />
                  </a>
                </div>
                <div className="col-sm-3">
                  <a href="https://www.linkedin.com/in/rebeccaao/">
                    <img
                      className="contact-icon"
                      src="https://lh3.googleusercontent.com/M1DoPmRtwZdJ2npYbPgfvBc1WXPDLbc-ne1RgPm_BKAKvgT3P9UP-Gn9SySZN8d91_yIRjF_ZD1qo7pq6TbuJ_svYbz69Et1B2ZJkF6be1V5c0nGC369TRoTLIqhjhq1wSB3qsSu0YrJf_-gT-7yWoln6p20_smLpL2BoVl3TJyqReQSXxtsf8ouaZMxF5js8TOf0vWYskaNMgS5zg-9ZsdRSG7yzjin5CiEfJo7tAvkg2wMkSg4jYcjFLguJZbF8eyHS_ygqXnCurTUM1858wEnNCqpWVf4pIjgYqBX1fc4QROXncGkOg3MmC5f0zkcNnLxVfxA8Ue7kc3srXOgv6DMr-I1IQrpSgk99e0eSiD1iaC0Pl5SCPdpfMXxy_kQyWSYcOyG_TjcnTsNa_oaIIuMEriwZ5rIt2gJdY61NvtFo38O1GfhQTFimoXnPRFKBDRmjOxZhykqEsSEF5fsm1naWStD8I0viwr4gU5KwUb_ZLEWNGgcSvAYv2AJoP_XT_Vsvw3Q1Ii4DhaoMJA4Bbc1K86T4tE7jlF-Ehh9ftoODME1VvPUvclKwn4Lo6obKGyVENT7KENCxFtHD1mAgHSgShb_C0rynAzcGg=s256-no"
                      alt="linkedIn"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
