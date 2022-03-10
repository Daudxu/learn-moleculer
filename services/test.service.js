/* eslint-disable indent */
"use strict";

const DbMixin = require("../mixins/db.mixin");
const test = require("../utils/test");


/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
  name: "Test",

  version: 1,

  mixins: [DbMixin("users")],


  /**
   * Settings
   */
  settings: {

  },

  /**
   * Dependencies
   */
  dependencies: [],

  /**
   * Actions
   */
  actions: {
    // add () {
    //   return 1;
    // },

    // sub (ctx) {
    //   return Number(ctx.params.a) - Number(ctx.params.b);
    // },

    hello: {
      rest: {
        method: "GET",
        path: "/hello"
      },
      async handler (ctx) {
        console.log('ctx', test.sa())
        return ctx.params;
      }
    },

    welcome: {
      rest: "/welcome",
      params: {
        name: "string"
      },
      /** @param {Context} ctx  */
      async handler (ctx) {
        return `Welcome, ${ctx.params.name}`;
      }
    }
  },

  /**
   * Events
   */
  events: {

  },

  /**
   * Methods
   */
  methods: {

  },

  /**
   * Service created lifecycle event handler
   */
  created () {

  },

  /**
   * Service started lifecycle event handler
   */
  async started () {

  },

  /**
   * Service stopped lifecycle event handler
   */
  async stopped () {

  }
};
