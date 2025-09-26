import {Bool,UInt8, Field, SmartContract, state, State, method, Bytes, Provable } from 'o1js';


class Bytes50 extends Bytes(50){}
export class bpmnCircuit extends SmartContract {
  @state(Bool) accepted = State<Bool>();

  init() {
    super.init();
    this.accepted.set(Bool(false));
  }

  @method async verifyTraceSCF(trace : Bytes50) {
	// console.log("calling verifiyTrace for, ")
    let out = verifyProcessSCF(trace.bytes);
    this.accepted.set(out)
  }

  @method async verifyTraceSTABLECOIN(trace : Bytes50) {
	// console.log("calling verifiyTrace for, ")
    let out = verifyProcessSTABLECOIN(trace.bytes);
    this.accepted.set(out)
  }
  
  @method async verifyProcessHC1CLNTL(trace : Bytes50) {
	// console.log("calling verifiyTrace for, ")
    let out = verifyProcessHC1CLNTL(trace.bytes);
    this.accepted.set(out)
  }

  @method async verifyProcessHcAg1ECLNTL(trace : Bytes50) {
	// console.log("calling verifiyTrace for, ")
    let out = verifyProcessHcAg1ECLNTL(trace.bytes);
    this.accepted.set(out)
  }

    @method async verifyProcessHcAg7HCPROC(trace : Bytes50) {
	// console.log("calling verifiyTrace for, ")
    let out = verifyProcessHcAg7HCPROC(trace.bytes);
    this.accepted.set(out)
  }

}

// Command used: 'a(cb|bc)d(ef|f)g' '--functionName' 'verifyProcess' '--filePath' './src/bpmnCircuit.ts'
export function verifyProcessSCF(input: UInt8[]) {

	Provable.asProver(() => {
		console.log( 'in verifyProcessSCF in ' );
	  });
	// console.log("calling verifyProcess ")
	const num_bytes = input.length;
	let states: Bool[][] = Array.from({ length: num_bytes + 1 }, () => []);
	let state_changed: Bool[] = Array.from({ length: num_bytes }, () => Bool(false));
	
	states[0][0] = Bool(true);
	//states[0][0] = Bool(false);
	for (let i = 1; i < 9; i++) {
		states[0][i] = Bool(false);
	}
	
	for (let i = 0; i < num_bytes; i++) {
		const eq0 = input[i].value.equals(97);
		const and0 = states[i][0].and(eq0);
		states[i+1][1] = and0;
		state_changed[i] = state_changed[i].or(states[i+1][1]);
		const eq1 = input[i].value.equals(98);
		const and1 = states[i][1].and(eq1);
		states[i+1][2] = and1;
		state_changed[i] = state_changed[i].or(states[i+1][2]);
		const eq2 = input[i].value.equals(99);
		const and2 = states[i][1].and(eq2);
		states[i+1][3] = and2;
		state_changed[i] = state_changed[i].or(states[i+1][3]);
		const and3 = states[i][2].and(eq2);
		const and4 = states[i][3].and(eq1);
		let multi_or0 = Bool(false);
		multi_or0 = multi_or0.or(and3);
		multi_or0 = multi_or0.or(and4);
		states[i+1][4] = multi_or0;
		state_changed[i] = state_changed[i].or(states[i+1][4]);
		const eq3 = input[i].value.equals(100);
		const and5 = states[i][4].and(eq3);
		states[i+1][5] = and5;
		state_changed[i] = state_changed[i].or(states[i+1][5]);
		const eq4 = input[i].value.equals(101);
		const and6 = states[i][5].and(eq4);
		states[i+1][6] = and6;
		state_changed[i] = state_changed[i].or(states[i+1][6]);
		const eq5 = input[i].value.equals(102);
		const and7 = states[i][5].and(eq5);
		const and8 = states[i][6].and(eq5);
		let multi_or1 = Bool(false);
		multi_or1 = multi_or1.or(and7);
		multi_or1 = multi_or1.or(and8);
		states[i+1][7] = multi_or1;
		state_changed[i] = state_changed[i].or(states[i+1][7]);
		const eq6 = input[i].value.equals(103);
		const and9 = states[i][7].and(eq6);
		states[i+1][8] = and9;
		state_changed[i] = state_changed[i].or(states[i+1][8]);
		states[i+1][0] = state_changed[i].not();
	}
	
	let final_state_result = Bool(false);
	//let final_state_result = Bool(true);//we are changing the default value to true because at compile time it is breaking the code.
	for (let i = 0; i <= num_bytes; i++) {
		final_state_result = final_state_result.or(states[i][8]);
	}
	const out = final_state_result;

	Provable.asProver(() => {
		console.log( 'in verifyProcessSCF out ', out );
	  });

	return out;
}

// Command used: 'a(cb|bc)de(ghij(lm(nu|op(qu|rs(x|tu|vw)))|ku)|fu)' '--functionName' 'verifyProcessSTABLECOIN' '--filePath' './src/bpmnCircuit.ts'
export function verifyProcessSTABLECOIN(input: UInt8[]) {

	Provable.asProver(() => {
		console.log( 'in verifyProcessSTABLECOIN in ' );
	  });

	const num_bytes = input.length;
	let states: Bool[][] = Array.from({ length: num_bytes + 1 }, () => []);
	let state_changed: Bool[] = Array.from({ length: num_bytes }, () => Bool(false));
	
	states[0][0] = Bool(true);
	for (let i = 1; i < 20; i++) {
		states[0][i] = Bool(false);
	}
	
	for (let i = 0; i < num_bytes; i++) {
		const eq0 = input[i].value.equals(102);
		const and0 = states[i][9].and(eq0);
		const eq1 = input[i].value.equals(107);
		const and1 = states[i][13].and(eq1);
		const eq2 = input[i].value.equals(110);
		const and2 = states[i][15].and(eq2);
		const eq3 = input[i].value.equals(113);
		const and3 = states[i][17].and(eq3);
		const eq4 = input[i].value.equals(116);
		const and4 = states[i][19].and(eq4);
		let multi_or0 = Bool(false);
		multi_or0 = multi_or0.or(and0);
		multi_or0 = multi_or0.or(and1);
		multi_or0 = multi_or0.or(and2);
		multi_or0 = multi_or0.or(and3);
		multi_or0 = multi_or0.or(and4);
		states[i+1][1] = multi_or0;
		state_changed[i] = state_changed[i].or(states[i+1][1]);
		const eq5 = input[i].value.equals(118);
		const and5 = states[i][19].and(eq5);
		states[i+1][2] = and5;
		state_changed[i] = state_changed[i].or(states[i+1][2]);
		const eq6 = input[i].value.equals(117);
		const and6 = states[i][1].and(eq6);
		const eq7 = input[i].value.equals(119);
		const and7 = states[i][2].and(eq7);
		const eq8 = input[i].value.equals(120);
		const and8 = states[i][19].and(eq8);
		let multi_or1 = Bool(false);
		multi_or1 = multi_or1.or(and6);
		multi_or1 = multi_or1.or(and7);
		multi_or1 = multi_or1.or(and8);
		states[i+1][3] = multi_or1;
		state_changed[i] = state_changed[i].or(states[i+1][3]);
		const eq9 = input[i].value.equals(97);
		const and9 = states[i][0].and(eq9);
		states[i+1][4] = and9;
		state_changed[i] = state_changed[i].or(states[i+1][4]);
		const eq10 = input[i].value.equals(98);
		const and10 = states[i][4].and(eq10);
		states[i+1][5] = and10;
		state_changed[i] = state_changed[i].or(states[i+1][5]);
		const eq11 = input[i].value.equals(99);
		const and11 = states[i][4].and(eq11);
		states[i+1][6] = and11;
		state_changed[i] = state_changed[i].or(states[i+1][6]);
		const and12 = states[i][5].and(eq11);
		const and13 = states[i][6].and(eq10);
		let multi_or2 = Bool(false);
		multi_or2 = multi_or2.or(and12);
		multi_or2 = multi_or2.or(and13);
		states[i+1][7] = multi_or2;
		state_changed[i] = state_changed[i].or(states[i+1][7]);
		const eq12 = input[i].value.equals(100);
		const and14 = states[i][7].and(eq12);
		states[i+1][8] = and14;
		state_changed[i] = state_changed[i].or(states[i+1][8]);
		const eq13 = input[i].value.equals(101);
		const and15 = states[i][8].and(eq13);
		states[i+1][9] = and15;
		state_changed[i] = state_changed[i].or(states[i+1][9]);
		const eq14 = input[i].value.equals(103);
		const and16 = states[i][9].and(eq14);
		states[i+1][10] = and16;
		state_changed[i] = state_changed[i].or(states[i+1][10]);
		const eq15 = input[i].value.equals(104);
		const and17 = states[i][10].and(eq15);
		states[i+1][11] = and17;
		state_changed[i] = state_changed[i].or(states[i+1][11]);
		const eq16 = input[i].value.equals(105);
		const and18 = states[i][11].and(eq16);
		states[i+1][12] = and18;
		state_changed[i] = state_changed[i].or(states[i+1][12]);
		const eq17 = input[i].value.equals(106);
		const and19 = states[i][12].and(eq17);
		states[i+1][13] = and19;
		state_changed[i] = state_changed[i].or(states[i+1][13]);
		const eq18 = input[i].value.equals(108);
		const and20 = states[i][13].and(eq18);
		states[i+1][14] = and20;
		state_changed[i] = state_changed[i].or(states[i+1][14]);
		const eq19 = input[i].value.equals(109);
		const and21 = states[i][14].and(eq19);
		states[i+1][15] = and21;
		state_changed[i] = state_changed[i].or(states[i+1][15]);
		const eq20 = input[i].value.equals(111);
		const and22 = states[i][15].and(eq20);
		states[i+1][16] = and22;
		state_changed[i] = state_changed[i].or(states[i+1][16]);
		const eq21 = input[i].value.equals(112);
		const and23 = states[i][16].and(eq21);
		states[i+1][17] = and23;
		state_changed[i] = state_changed[i].or(states[i+1][17]);
		const eq22 = input[i].value.equals(114);
		const and24 = states[i][17].and(eq22);
		states[i+1][18] = and24;
		state_changed[i] = state_changed[i].or(states[i+1][18]);
		const eq23 = input[i].value.equals(115);
		const and25 = states[i][18].and(eq23);
		states[i+1][19] = and25;
		state_changed[i] = state_changed[i].or(states[i+1][19]);
		states[i+1][0] = state_changed[i].not();
	}
	
	let final_state_result = Bool(false);
	for (let i = 0; i <= num_bytes; i++) {
		final_state_result = final_state_result.or(states[i][3]);
	}
	const out = final_state_result;

	Provable.asProver(() => {
		console.log( 'in verifyProcessSTABLECOIN out  ', out );
	  });

	return out;
}



// Command used: 'abc(edf|def|efd)gh(jklm(opqr(ty|su(vw|xy))|nu(vw|xy))|iu(vw|xy))' '--functionName' 'verifyProcessDVP' '--filePath' './src/bpmnCircuit.ts'
export function verifyProcessDVP(input: UInt8[]) {

	
	Provable.asProver(() => {
		console.log( 'in verifyProcessDVP in  ' );
	  });

	const num_bytes = input.length;
	let states: Bool[][] = Array.from({ length: num_bytes + 1 }, () => []);
	let state_changed: Bool[] = Array.from({ length: num_bytes }, () => Bool(false));
	
	states[0][0] = Bool(true);
	for (let i = 1; i < 24; i++) {
		states[0][i] = Bool(false);
	}
	
	for (let i = 0; i < num_bytes; i++) {
		const eq0 = input[i].value.equals(117);
		const and0 = states[i][8].and(eq0);
		states[i+1][1] = and0;
		state_changed[i] = state_changed[i].or(states[i+1][1]);
		const eq1 = input[i].value.equals(112);
		const and1 = states[i][23].and(eq1);
		states[i+1][2] = and1;
		state_changed[i] = state_changed[i].or(states[i+1][2]);
		const eq2 = input[i].value.equals(118);
		const and2 = states[i][1].and(eq2);
		states[i+1][3] = and2;
		state_changed[i] = state_changed[i].or(states[i+1][3]);
		const eq3 = input[i].value.equals(120);
		const and3 = states[i][1].and(eq3);
		const eq4 = input[i].value.equals(116);
		const and4 = states[i][7].and(eq4);
		let multi_or0 = Bool(false);
		multi_or0 = multi_or0.or(and3);
		multi_or0 = multi_or0.or(and4);
		states[i+1][4] = multi_or0;
		state_changed[i] = state_changed[i].or(states[i+1][4]);
		const eq5 = input[i].value.equals(113);
		const and5 = states[i][2].and(eq5);
		states[i+1][5] = and5;
		state_changed[i] = state_changed[i].or(states[i+1][5]);
		const eq6 = input[i].value.equals(119);
		const and6 = states[i][3].and(eq6);
		const eq7 = input[i].value.equals(121);
		const and7 = states[i][4].and(eq7);
		let multi_or1 = Bool(false);
		multi_or1 = multi_or1.or(and6);
		multi_or1 = multi_or1.or(and7);
		states[i+1][6] = multi_or1;
		state_changed[i] = state_changed[i].or(states[i+1][6]);
		const eq8 = input[i].value.equals(114);
		const and8 = states[i][5].and(eq8);
		states[i+1][7] = and8;
		state_changed[i] = state_changed[i].or(states[i+1][7]);
		const eq9 = input[i].value.equals(115);
		const and9 = states[i][7].and(eq9);
		const eq10 = input[i].value.equals(105);
		const and10 = states[i][18].and(eq10);
		const eq11 = input[i].value.equals(110);
		const and11 = states[i][22].and(eq11);
		let multi_or2 = Bool(false);
		multi_or2 = multi_or2.or(and9);
		multi_or2 = multi_or2.or(and10);
		multi_or2 = multi_or2.or(and11);
		states[i+1][8] = multi_or2;
		state_changed[i] = state_changed[i].or(states[i+1][8]);
		const eq12 = input[i].value.equals(97);
		const and12 = states[i][0].and(eq12);
		states[i+1][9] = and12;
		state_changed[i] = state_changed[i].or(states[i+1][9]);
		const eq13 = input[i].value.equals(98);
		const and13 = states[i][9].and(eq13);
		states[i+1][10] = and13;
		state_changed[i] = state_changed[i].or(states[i+1][10]);
		const eq14 = input[i].value.equals(99);
		const and14 = states[i][10].and(eq14);
		states[i+1][11] = and14;
		state_changed[i] = state_changed[i].or(states[i+1][11]);
		const eq15 = input[i].value.equals(100);
		const and15 = states[i][11].and(eq15);
		states[i+1][12] = and15;
		state_changed[i] = state_changed[i].or(states[i+1][12]);
		const eq16 = input[i].value.equals(101);
		const and16 = states[i][11].and(eq16);
		states[i+1][13] = and16;
		state_changed[i] = state_changed[i].or(states[i+1][13]);
		const and17 = states[i][12].and(eq16);
		const and18 = states[i][13].and(eq15);
		let multi_or3 = Bool(false);
		multi_or3 = multi_or3.or(and17);
		multi_or3 = multi_or3.or(and18);
		states[i+1][14] = multi_or3;
		state_changed[i] = state_changed[i].or(states[i+1][14]);
		const eq17 = input[i].value.equals(102);
		const and19 = states[i][13].and(eq17);
		states[i+1][15] = and19;
		state_changed[i] = state_changed[i].or(states[i+1][15]);
		const and20 = states[i][14].and(eq17);
		const and21 = states[i][15].and(eq15);
		let multi_or4 = Bool(false);
		multi_or4 = multi_or4.or(and20);
		multi_or4 = multi_or4.or(and21);
		states[i+1][16] = multi_or4;
		state_changed[i] = state_changed[i].or(states[i+1][16]);
		const eq18 = input[i].value.equals(103);
		const and22 = states[i][16].and(eq18);
		states[i+1][17] = and22;
		state_changed[i] = state_changed[i].or(states[i+1][17]);
		const eq19 = input[i].value.equals(104);
		const and23 = states[i][17].and(eq19);
		states[i+1][18] = and23;
		state_changed[i] = state_changed[i].or(states[i+1][18]);
		const eq20 = input[i].value.equals(106);
		const and24 = states[i][18].and(eq20);
		states[i+1][19] = and24;
		state_changed[i] = state_changed[i].or(states[i+1][19]);
		const eq21 = input[i].value.equals(107);
		const and25 = states[i][19].and(eq21);
		states[i+1][20] = and25;
		state_changed[i] = state_changed[i].or(states[i+1][20]);
		const eq22 = input[i].value.equals(108);
		const and26 = states[i][20].and(eq22);
		states[i+1][21] = and26;
		state_changed[i] = state_changed[i].or(states[i+1][21]);
		const eq23 = input[i].value.equals(109);
		const and27 = states[i][21].and(eq23);
		states[i+1][22] = and27;
		state_changed[i] = state_changed[i].or(states[i+1][22]);
		const eq24 = input[i].value.equals(111);
		const and28 = states[i][22].and(eq24);
		states[i+1][23] = and28;
		state_changed[i] = state_changed[i].or(states[i+1][23]);
		states[i+1][0] = state_changed[i].not();
	}
	
	let final_state_result = Bool(false);
	for (let i = 0; i <= num_bytes; i++) {
		final_state_result = final_state_result.or(states[i][6]);
	}
	const out = final_state_result;

	Provable.asProver(() => {
		console.log( 'in verifyProcessDVP out  ', out );
	  });

	return out;
}

// Command used: 'ab(c|d)efghijkl' '--functionName' 'verifyProcessHC1CLNTL' '--filePath' './src/contracts/bpmnCircuit.ts'
export function verifyProcessHC1CLNTL(input: UInt8[]) {
	const num_bytes = input.length;
	let states: Bool[][] = Array.from({ length: num_bytes + 1 }, () => []);
	let state_changed: Bool[] = Array.from({ length: num_bytes }, () => Bool(false));
	
	states[0][0] = Bool(true);
	for (let i = 1; i < 13; i++) {
		states[0][i] = Bool(false);
	}
	
	for (let i = 0; i < num_bytes; i++) {
		// a (97)
		const eq0 = input[i].value.equals(97);
		const and0 = states[i][0].and(eq0);
		states[i+1][1] = and0;
		state_changed[i] = state_changed[i].or(states[i+1][1]);
		
		// b (98)
		const eq1 = input[i].value.equals(98);
		const and1 = states[i][1].and(eq1);
		states[i+1][2] = and1;
		state_changed[i] = state_changed[i].or(states[i+1][2]);
		
		// c (99) or d (100)
		const eq2 = input[i].value.equals(99);
		const eq3 = input[i].value.equals(100);
		const and2 = states[i][2].and(eq2);
		const and3 = states[i][2].and(eq3);
		let multi_or0 = Bool(false);
		multi_or0 = multi_or0.or(and2);
		multi_or0 = multi_or0.or(and3);
		states[i+1][3] = multi_or0;
		state_changed[i] = state_changed[i].or(states[i+1][3]);
		
		// e (101)
		const eq4 = input[i].value.equals(101);
		const and4 = states[i][3].and(eq4);
		states[i+1][4] = and4;
		state_changed[i] = state_changed[i].or(states[i+1][4]);
		
		// f (102)
		const eq5 = input[i].value.equals(102);
		const and5 = states[i][4].and(eq5);
		states[i+1][5] = and5;
		state_changed[i] = state_changed[i].or(states[i+1][5]);
		
		// g (103)
		const eq6 = input[i].value.equals(103);
		const and6 = states[i][5].and(eq6);
		states[i+1][6] = and6;
		state_changed[i] = state_changed[i].or(states[i+1][6]);
		
		// h (104)
		const eq7 = input[i].value.equals(104);
		const and7 = states[i][6].and(eq7);
		states[i+1][7] = and7;
		state_changed[i] = state_changed[i].or(states[i+1][7]);
		
		// i (105)
		const eq8 = input[i].value.equals(105);
		const and8 = states[i][7].and(eq8);
		states[i+1][8] = and8;
		state_changed[i] = state_changed[i].or(states[i+1][8]);
		
		// j (106)
		const eq9 = input[i].value.equals(106);
		const and9 = states[i][8].and(eq9);
		states[i+1][9] = and9;
		state_changed[i] = state_changed[i].or(states[i+1][9]);
		
		// k (107)
		const eq10 = input[i].value.equals(107);
		const and10 = states[i][9].and(eq10);
		states[i+1][10] = and10;
		state_changed[i] = state_changed[i].or(states[i+1][10]);
		
		// l (108)
		const eq11 = input[i].value.equals(108);
		const and11 = states[i][10].and(eq11);
		states[i+1][11] = and11;
		state_changed[i] = state_changed[i].or(states[i+1][11]);
		
		states[i+1][0] = state_changed[i].not();
	}
	
	let final_state_result = Bool(false);
	for (let i = 0; i <= num_bytes; i++) {
		final_state_result = final_state_result.or(states[i][11]);
	}
	const out = final_state_result;

	return out;
}

// Command used: 'ab(c|d)e(f|g|h)i(j|k)l(m|n|o)pqrst' '--functionName' 'verifyProcessHcAg1ECLNTL' '--filePath' './src/contracts/bpmnCircuit.ts'
export function verifyProcessHcAg1ECLNTL(input: UInt8[]) {
	const num_bytes = input.length;
	let states: Bool[][] = Array.from({ length: num_bytes + 1 }, () => []);
	let state_changed: Bool[] = Array.from({ length: num_bytes }, () => Bool(false));
	
	states[0][0] = Bool(true);
	for (let i = 1; i < 15; i++) {
		states[0][i] = Bool(false);
	}
	
	for (let i = 0; i < num_bytes; i++) {
		const eq0 = input[i].value.equals(97);
		const and0 = states[i][0].and(eq0);
		states[i+1][1] = and0;
		state_changed[i] = state_changed[i].or(states[i+1][1]);
		const eq1 = input[i].value.equals(98);
		const and1 = states[i][1].and(eq1);
		states[i+1][2] = and1;
		state_changed[i] = state_changed[i].or(states[i+1][2]);
		const eq2 = input[i].value.equals(99);
		const eq3 = input[i].value.equals(100);
		let multi_or0 = Bool(false);
		multi_or0 = multi_or0.or(eq2);
		multi_or0 = multi_or0.or(eq3);
		const and2 = states[i][2].and(multi_or0);
		states[i+1][3] = and2;
		state_changed[i] = state_changed[i].or(states[i+1][3]);
		const eq4 = input[i].value.equals(101);
		const and3 = states[i][3].and(eq4);
		states[i+1][4] = and3;
		state_changed[i] = state_changed[i].or(states[i+1][4]);
		const eq5 = input[i].value.equals(102);
		const eq6 = input[i].value.equals(103);
		const eq7 = input[i].value.equals(104);
		let multi_or1 = Bool(false);
		multi_or1 = multi_or1.or(eq5);
		multi_or1 = multi_or1.or(eq6);
		multi_or1 = multi_or1.or(eq7);
		const and4 = states[i][4].and(multi_or1);
		states[i+1][5] = and4;
		state_changed[i] = state_changed[i].or(states[i+1][5]);
		const eq8 = input[i].value.equals(105);
		const and5 = states[i][5].and(eq8);
		states[i+1][6] = and5;
		state_changed[i] = state_changed[i].or(states[i+1][6]);
		const eq9 = input[i].value.equals(106);
		const eq10 = input[i].value.equals(107);
		let multi_or2 = Bool(false);
		multi_or2 = multi_or2.or(eq9);
		multi_or2 = multi_or2.or(eq10);
		const and6 = states[i][6].and(multi_or2);
		states[i+1][7] = and6;
		state_changed[i] = state_changed[i].or(states[i+1][7]);
		const eq11 = input[i].value.equals(108);
		const and7 = states[i][7].and(eq11);
		states[i+1][8] = and7;
		state_changed[i] = state_changed[i].or(states[i+1][8]);
		const eq12 = input[i].value.equals(109);
		const eq13 = input[i].value.equals(110);
		const eq14 = input[i].value.equals(111);
		let multi_or3 = Bool(false);
		multi_or3 = multi_or3.or(eq12);
		multi_or3 = multi_or3.or(eq13);
		multi_or3 = multi_or3.or(eq14);
		const and8 = states[i][8].and(multi_or3);
		states[i+1][9] = and8;
		state_changed[i] = state_changed[i].or(states[i+1][9]);
		const eq15 = input[i].value.equals(112);
		const and9 = states[i][9].and(eq15);
		states[i+1][10] = and9;
		state_changed[i] = state_changed[i].or(states[i+1][10]);
		const eq16 = input[i].value.equals(113);
		const and10 = states[i][10].and(eq16);
		states[i+1][11] = and10;
		state_changed[i] = state_changed[i].or(states[i+1][11]);
		const eq17 = input[i].value.equals(114);
		const and11 = states[i][11].and(eq17);
		states[i+1][12] = and11;
		state_changed[i] = state_changed[i].or(states[i+1][12]);
		const eq18 = input[i].value.equals(115);
		const and12 = states[i][12].and(eq18);
		states[i+1][13] = and12;
		state_changed[i] = state_changed[i].or(states[i+1][13]);
		const eq19 = input[i].value.equals(116);
		const and13 = states[i][13].and(eq19);
		states[i+1][14] = and13;
		state_changed[i] = state_changed[i].or(states[i+1][14]);
		states[i+1][0] = state_changed[i].not();
	}
	
	let final_state_result = Bool(false);
	for (let i = 0; i <= num_bytes; i++) {
		final_state_result = final_state_result.or(states[i][14]);
	}
	const out = final_state_result;

	return out;
}


export function verifyProcessHcAg3TLMED(input: UInt8[]) {
	return new Bool(true);
}

export function verifyProcessHcAg4USTLM(input: UInt8[]) {
	return new Bool(true);
}


// Command used: 'abc(d|e)f(g|h)j(k|l)m(n|o)pq' '--functionName' 'verifyProcessHcAg7HCPROC' '--filePath' './src/contracts/bpmnCircuit.ts'
export function verifyProcessHcAg7HCPROC(input: UInt8[]) {
	Provable.asProver(() => {
		console.log( 'in verifyProcessHcAg7HCPROC in' );
	});

	const num_bytes = input.length;
	let states: Bool[][] = Array.from({ length: num_bytes + 1 }, () => []);
	let state_changed: Bool[] = Array.from({ length: num_bytes }, () => Bool(false));
	
	states[0][0] = Bool(true);
	for (let i = 1; i < 13; i++) {
		states[0][i] = Bool(false);
	}
	
	for (let i = 0; i < num_bytes; i++) {
		// a (97)
		const eq0 = input[i].value.equals(97);
		const and0 = states[i][0].and(eq0);
		states[i+1][1] = and0;
		state_changed[i] = state_changed[i].or(states[i+1][1]);
		
		// b (98)
		const eq1 = input[i].value.equals(98);
		const and1 = states[i][1].and(eq1);
		states[i+1][2] = and1;
		state_changed[i] = state_changed[i].or(states[i+1][2]);
		
		// c (99)
		const eq2 = input[i].value.equals(99);
		const and2 = states[i][2].and(eq2);
		states[i+1][3] = and2;
		state_changed[i] = state_changed[i].or(states[i+1][3]);
		
		// (d|e) - d=100, e=101
		const eq3 = input[i].value.equals(100); // d
		const eq4 = input[i].value.equals(101); // e
		let multi_or0 = Bool(false);
		multi_or0 = multi_or0.or(eq3);
		multi_or0 = multi_or0.or(eq4);
		const and3 = states[i][3].and(multi_or0);
		states[i+1][4] = and3;
		state_changed[i] = state_changed[i].or(states[i+1][4]);
		
		// f (102)
		const eq5 = input[i].value.equals(102);
		const and4 = states[i][4].and(eq5);
		states[i+1][5] = and4;
		state_changed[i] = state_changed[i].or(states[i+1][5]);
		
		// (g|h) - g=103, h=104
		const eq6 = input[i].value.equals(103); // g
		const eq7 = input[i].value.equals(104); // h
		let multi_or1 = Bool(false);
		multi_or1 = multi_or1.or(eq6);
		multi_or1 = multi_or1.or(eq7);
		const and5 = states[i][5].and(multi_or1);
		states[i+1][6] = and5;
		state_changed[i] = state_changed[i].or(states[i+1][6]);
		
		// j (106)
		const eq8 = input[i].value.equals(106);
		const and6 = states[i][6].and(eq8);
		states[i+1][7] = and6;
		state_changed[i] = state_changed[i].or(states[i+1][7]);
		
		// (k|l) - k=107, l=108
		const eq9 = input[i].value.equals(107); // k
		const eq10 = input[i].value.equals(108); // l
		let multi_or2 = Bool(false);
		multi_or2 = multi_or2.or(eq9);
		multi_or2 = multi_or2.or(eq10);
		const and7 = states[i][7].and(multi_or2);
		states[i+1][8] = and7;
		state_changed[i] = state_changed[i].or(states[i+1][8]);
		
		// m (109)
		const eq11 = input[i].value.equals(109);
		const and8 = states[i][8].and(eq11);
		states[i+1][9] = and8;
		state_changed[i] = state_changed[i].or(states[i+1][9]);
		
		// (n|o) - n=110, o=111
		const eq12 = input[i].value.equals(110); // n
		const eq13 = input[i].value.equals(111); // o
		let multi_or3 = Bool(false);
		multi_or3 = multi_or3.or(eq12);
		multi_or3 = multi_or3.or(eq13);
		const and9 = states[i][9].and(multi_or3);
		states[i+1][10] = and9;
		state_changed[i] = state_changed[i].or(states[i+1][10]);
		
		// p (112)
		const eq14 = input[i].value.equals(112);
		const and10 = states[i][10].and(eq14);
		states[i+1][11] = and10;
		state_changed[i] = state_changed[i].or(states[i+1][11]);
		
		// q (113) - final letter
		const eq15 = input[i].value.equals(113);
		const and11 = states[i][11].and(eq15);
		states[i+1][12] = and11;
		state_changed[i] = state_changed[i].or(states[i+1][12]);
		
		states[i+1][0] = state_changed[i].not();
	}
	
	let final_state_result = Bool(false);
	for (let i = 0; i <= num_bytes; i++) {
		final_state_result = final_state_result.or(states[i][12]);
	}
	const out = final_state_result;

	Provable.asProver(() => {
		console.log( 'in verifyProcessHcAg7HCPROC out ', out );
	});

	return out;
}