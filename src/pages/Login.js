import React from 'react'
import "../assets/Styles/Components/Authentication/Login.css"
import Background from "../assets/Images/Background/background-login.png"

const Login = () => {
    return (
        <div class="container-sm d-flex justify-content-center">
            <section class="wrapper login border rounded p-4" style={{ margin: "40px 0" }}>
                <div class="d-flex flex-column align-items-center">
                    <img src={Background} class="img-fluid" alt='background' />
                    <span class="login__text pt-4">Đăng nhập</span>
                    <form class="login__form-email d-flex flex-column">
                        <input class="login__email" type="text" placeholder="Tên tài khoản" />

                        <input class="login__email" type="text" placeholder="Mật khẩu" />
                        <button class="btn-continue">Đăng nhập</button>
                        {/* <span class="text-danger text-center">Email không tồn tại, thử lại!</span> */}
                    </form>
                </div>
                {/* <div ng-if="statusForm==2" class="d2 step2 hide d-flex flex-column align-items-center" style={{ minHeight: "400px", padding: "40px 0" }}>
                    <span class="login__text text-center">Mã xác nhận đã được gửi đến email <b></b></span>
                    <form class="login__form-email d-flex flex-column">
                        <input ng-model="emailverifi.code" class="login__email" name="txtOTP" placeholder="Nhập mã xác nhận gồm 6 chữ số" maxlength="6" autocomplete="one-time-code" />
                        <label class="hide"></label>
                        <button class="btn-continue" ng-click="SubmitForm()">Tiếp tục</button>
                        <a ng-show="notCodeExist" class="text-danger text-center">Mã xác nhận không hợp lệ, thử lại!</a>
                    </form>
                    <a class="resend-sms" ng-click="ReturnEmailForm()">Trở lại</a>

                </div> */}
            </section>
        </div>
    )
}

export default Login