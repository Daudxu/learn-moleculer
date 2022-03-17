/* eslint-disable indent */
"use strict";

const DbMixin = require("../mixins/db.mixin");
const test = require("../utils/test");
// const https = require('https').globalAgent.options.ca = require('ssl-root-cas/latest').create();
const request = require('request');
// const axios = require('axios');
// const tunnel = require('tunnel')
// const Qs = require("qs");
// const fs = require("fs");
// const path = require("path");


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
    collectionsList: {
      rest: {
        method: "GET",
        path: "/collectionsList"
      },
      cache: true,
      async handler (ctx) {
        return await this.getList(ctx);
      }
    },

    hello: {
      rest: {
        method: "GET",
        path: "/hello"
      },
      async handler (ctx) {
        console.log(this.adapter.broker.call("test.create", {
          username: "john",
          name: "John Doe",
          status: 1
        }))

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
    // 插入多条数据
    async seedDB () {
      await this.adapter.insertMany([
        { name: "Samsung Galaxy S10 Plus", quantity: 10, price: 704 },
        { name: "iPhone 11 Pro", quantity: 25, price: 999 },
        { name: "Huawei P30 Pro", quantity: 15, price: 679 },
      ]);
    },
    sendMail () {
      this.broker.call("test.create", {
        username: "john",
        name: "John Doe",
        status: 1
      })
      // return new Promise((resolve) => {
      //   resolve(12312312)
      // });
    },
    async getList () {
      return await new Promise((resolve, reject) => {
        (async () => {
          let url = `https://api.digination.xyz/v2/collections`;
          request.get({ url: url, rejectUnauthorized: false }, function (err, response, body) {
            resolve(JSON.parse(body))
          })
        })().catch((e) => {
          reject("error:", e)
        });
      });

      // return sa
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
