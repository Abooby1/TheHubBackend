import express from 'express'
import JSONdb from 'simple-json-db'
import bodyParser from 'body-parser'

import * as utils from './utils.js'

const app = express()
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.use((req, res, next) => {
	try {
		req.body = JSON.parse(Object.keys(req.body)[0]);
	}catch(err) {}
	req.hashedId = hash.sha256().update(req.headers['userid']).digest('hex')

	next()
})

const Users = new JSONdb('data/users.json')
const Messages = new JSONdb('data/messages.json')
const Rooms = new JSONdb('data/rooms.json')

import Socket from 'cdosocket'
const _socket = new Socket('hdSO-TWyVB_faWDN-hi1eJgTUA9UQ-UUUK-4bz06s5c')
_socket.init({
	deleteAfter: true
})

app.get('/', (req, res) => {
	res.send('g')
})

// user
app.get('/user', (req, res) => {
	//
})

app.listen(3000)