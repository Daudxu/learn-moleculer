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

  mixins: [DbMixin("test")],


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
    hello: {
      rest: {
        method: "GET",
        path: "/hello"
      },
      async handler (ctx) {
        console.log('ctx', this.broker)
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
    "user.created" (ctx) {
      this.logger.info("User created:", ctx.params);
      // Do something
    },
    "user.*" (ctx) {
      console.log("Payload:", ctx.params);
      console.log("Sender:", ctx.nodeID);
      console.log("Metadata:", ctx.meta);
      console.log("The called event name:", ctx.eventName);
    }
  },

  /**
   * Methods
   */
  methods: {
    sendMail () {
      this.broker.call("test.create", {
        username: "john",
        name: "John Doe",
        status: 1
      })
      // return new Promise((resolve) => {
      //   resolve(12312312)
      // });
    }
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
