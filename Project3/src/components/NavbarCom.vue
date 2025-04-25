<template>
    <nav>
      <ul>
        <li @click="navigationToOtherPage('')">Home</li>
        <li @click="navigationToOtherPage('user/settings')">User Settings</li>
        <li @click="navigationToOtherPage('user/profile')">User Profile</li>
        <li @click="navigationToOtherPage('user')">User</li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    methods: {
      navigationToOtherPage(routePath) {
        this.$router.push(`/${routePath}`);
      },
    },
  };
  </script>
  
  <style>
  ul {
    display: flex;
    gap: 0 100px;
    font-weight: bold;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    cursor: pointer;
  }
  </style>
  