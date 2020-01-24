import * as slopes from "slopes"
import BN from 'bn.js';
import { Buffer } from 'buffer/';

let bintools = slopes.BinTools.getInstance();

let s:slopes.Slopes = new slopes.Slopes("localhost", 9650);

let utxoset:slopes.UTXOSet = new slopes.UTXOSet();

let u:Array<slopes.UTXO> = [];

u.push(new slopes.UTXO());

let input:slopes.Input = new slopes.Input();

let kp:slopes.AVMKeyPair = new slopes.AVMKeyPair();

let kc:slopes.AVMKeyChain = new slopes.AVMKeyChain();

let outputCA:slopes.OutCreateAsset = new slopes.OutCreateAsset();

let outputPay:slopes.OutPayment = new slopes.OutPayment(bintools.b58ToBuffer("madeup1"));

let outputTOL:slopes.OutTakeOrLeave = new slopes.OutTakeOrLeave(Buffer.from("madeup2", "utf8"));

let utx:slopes.TxUnsigned = new slopes.TxUnsigned();

let tx:slopes.Tx = new slopes.Tx();

let addr:slopes.Address = new slopes.Address();

let sigidx:slopes.SigIdx = new slopes.SigIdx();

let sig:slopes.Signature = new slopes.Signature();

let utc:BN = slopes.UnixNow();

let po:slopes.PersistanceOptions = new slopes.PersistanceOptions("a", false, "union");

let avm:slopes.AVM = new slopes.AVM(s);


let address1 = "c3344128e060128ede3523a24a461c8943ab0859";
let address2 = "51025c61fbcfc078f69334f834be6dd26d55a955";

console.log(
    "address1", bintools.avaSerialize(Buffer.from(address1, "hex")),
    "address2", bintools.avaSerialize(Buffer.from(address2, "hex"))
    );

    let mypk = Buffer.from("d0e17d4b31380f96a42b3e9ffc4c1b2a93589a1e51d86d7edc107f602fbc7475", "hex");
console.log("pk58", bintools.avaSerialize(mypk));

let myassetid = Buffer.from("8a5d2d32e68bc50036e4d086044617fe4a0a0296b274999ba568ea92da46d533", "hex");
console.log("myassetid", bintools.avaSerialize(myassetid));