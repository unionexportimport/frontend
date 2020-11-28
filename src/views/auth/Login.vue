<template>
  <div class="login">
    <el-row>
      <el-col :span="12">
        <div class="login-bg">
          <div class="overlay">
            <h3>UNION EXPORT IMPORT</h3>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="login-form">
          <h3>Login</h3>
          <p class="login-contact">Don’t have an account? Please contact your <strong>Admin</strong></p>
          <div class="form-input">
            <input placeholder="Please enter your email here" />
          </div>
          <div class="form-input">
            <input type="password" placeholder="Please enter your password here" />
          </div>
          <p class="forget-password">Forget Password?</p>
          <button class="login-button">LOGIN</button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
