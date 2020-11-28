<template>
  <el-container>
    <el-header height="none"><Header /></el-header>
    <el-container>
      <el-aside width="200px"><Sidebar /></el-aside>
      <el-main>
        <div class="body-container">
          <router-view />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default {
  data() {
    return {
      collapse: false,
    };
  },
  methods: {
    handleCollapse() {
      this.collapse = !this.collapse;
    },
  },
  components: { Header, Sidebar },
};
</script>
