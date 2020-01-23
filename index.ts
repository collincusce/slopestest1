import Slopes from "slopes"
import BinTools from "slopes/typings/slopes/src/utils/bintools"
import * as Ins from "slopes/typings/slopes/src/apis/avm/inputs"
import * as Keys from "slopes/typings/slopes/src/apis/avm/keychain"
import * as Outs from "slopes/typings/slopes/src/apis/avm/outputs"
import * as Txs from "slopes/typings/slopes/src/apis/avm/tx"
import * as Types from "slopes/typings/slopes/src/apis/avm/types"
import * as UTXOs from "slopes/typings/slopes/src/apis/avm/utxos"
import BN from 'bn.js';
import { Buffer } from 'buffer/';

let bintools:BinTools = BinTools.getInstance();

let s:Slopes = new Slopes("localhost", 9650);

let utxoset:UTXOs.UTXOSet = new UTXOs.UTXOSet();

let u:Array<UTXOs.UTXO>;

u.push(new UTXOs.UTXO());

let input:Ins.Input = new Ins.Input();

let kp:Keys.AVMKeyPair = new Keys.AVMKeyPair();

let kc:Keys.AVMKeyChain = new Keys.AVMKeyChain();

let outputCA:Outs.OutCreateAsset = new Outs.OutCreateAsset();

let outputPay:Outs.OutPayment = new Outs.OutPayment(bintools.b58ToBuffer("madeup1"));

let outputTOL:Outs.OutTakeOrLeave = new Outs.OutTakeOrLeave(Buffer.from("madeup2", "utf8"));

let utx:Txs.TxUnsigned = new Txs.TxUnsigned();

let tx:Txs.Tx = new Txs.Tx();

let addr:Types.Address = new Types.Address();

let sigidx:Types.SigIdx = new Types.SigIdx();

let sig:Types.Signature = new Types.Signature();

let utc:BN = Types.UnixNow();

