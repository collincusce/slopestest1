import {Slopes, BinTools, UnixNow, AVM, UTXO, UTXOSet, Input, AVMKeyPair, AVMKeyChain, OutCreateAsset, OutPayment, OutTakeOrLeave, TxUnsigned, Tx, Address, PersistanceOptions, SigIdx, Signature} from "slopes"
import BN from 'bn.js';
import { Buffer } from 'buffer/';

let bintools = BinTools.getInstance();

let s:Slopes = new Slopes("localhost", 9650);

let utxoset:UTXOSet = new UTXOSet();

let u:Array<UTXO>;

u.push(new UTXO());

let input:Input = new Input();

let kp:AVMKeyPair = new AVMKeyPair();

let kc:AVMKeyChain = new AVMKeyChain();

let outputCA:OutCreateAsset = new OutCreateAsset();

let outputPay:OutPayment = new OutPayment(bintools.b58ToBuffer("madeup1"));

let outputTOL:OutTakeOrLeave = new OutTakeOrLeave(Buffer.from("madeup2", "utf8"));

let utx:TxUnsigned = new TxUnsigned();

let tx:Tx = new Tx();

let addr:Address = new Address();

let sigidx:SigIdx = new SigIdx();

let sig:Signature = new Signature();

let utc:BN = UnixNow();

let po:PersistanceOptions = new PersistanceOptions("a", false, "union");

let avm:AVM = new AVM(s);