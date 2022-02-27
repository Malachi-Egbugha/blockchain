const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const Blockchain = require('./blockchain');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const bitcoin = new Blockchain();
const nodeAddress = uuid.v1().split('-').join('');
//get entire blockchain
app.get('/blockchain', function(req, res){
    res.send(bitcoin);

})
//create a new transaction
app.post('/transaction', function(req, res){
    const blockIndex = bitcoin.createNewTransaction(req.body.amount,req.body.sender,req.body.recipient);
    res.json({note:`Transaction will be added in  block ${blockIndex}.`})
});
//mine a block
app.get('/mine', function(req, res){
    const lastBlock =  bitcoin.getLastBlock();
    const previousBlockHash = lastBlock['hash'];
    const currentBlockData ={
        transactions: bitcoin.pendingTransactions,
        index: lastBlock['índex'] + 1,

    };
    const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
    const blockHash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);
    bitcoin.createNewTransaction(12.5, "00",nodeAddress);
    const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);
    res.json({
        note: "New block mined successfully",
        block: newBlock
    });
});
app.listen(3000);