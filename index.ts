import * as slopes from "slopes"
import BN from 'bn.js';
import { Buffer } from 'buffer/';

let bintools = slopes.BinTools.getInstance();

let s:slopes.Slopes = new slopes.Slopes("localhost", 9650);

let utxoset:slopes.UTXOSet = new slopes.UTXOSet();

let u:Array<slopes.UTXO>;

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