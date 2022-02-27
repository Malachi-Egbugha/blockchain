const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();
//bitcoin.createNewBlock(2389,'IJHD76JDBJV','JKNDF767NV ');
//bitcoin.createNewTransaction(100,'ALEXSD45678u','JENNokbdb46');
//bitcoin.createNewBlock(25489,'AIJHD76JDBJV','MJKNDF767NV ');
//console.log(bitcoin.chain[1]);
const previousBlockHash = '0NIUYT&IU$FGNBH';
const currentBlockData = [
    {
        amount: 30,
        sender: '90KMNJHG765HJN',
        recipient: '90KIUJNHBGFD78'
    },
    {
        amount: 10,
        sender: '09LKIUYTGHBVF5',
        recipient: 'UInjhbg76YUJBV'
    },
    {
        amount: 200,
        sender: 'UI546TYUeDC09',
        recipient: 'AUSDF893456'
    }
];

console.log(bitcoin.proofOfWork(previousBlockHash,currentBlockData));