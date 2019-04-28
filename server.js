const express = require('express')
const path = require('path')
const { RESTServer } = require('demo-rest')
const { ensureDir, DB_DIR } = require('demo-utils')

ensureDir(DB_DIR)
server = new RESTServer(7000, true)
server.getApp().use(express.static(path.join(__dirname, 'public')))
server.start()
