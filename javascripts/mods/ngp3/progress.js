// Gathered from NG+3R v0.7 - Fluctuate
// Feature Notifications
const NGP3_FEATURES = {
	start: {
		name: "Start",
		met: _ => true
	},
	md: {
		name: "Meta Dimensions",
		met: _ => hasDilStudy(6),
		req: _ => 1e24,
		req_res: _ => player.dilation.dilatedTime,
		req_log: true,
		req_disp: (amt, req) => `${shortenDimensions(amt)} / ${shortenDimensions(req)} Time Theorems`
	},
	ms: {
		name: "Mastery Studies",
		tab: _ => TAB_CORE.open("eter", "ts_master"),

		met: _ => MTS.unl(),
		req: _ => 1e100,
		req_res: _ => player.timestudy.theorem,
		req_log: true,
		req_disp: (amt, req) => `${shorten(amt)} / ${shorten(req)} dilated time`
	},
	qu: {
		name: "Quantum",
		layer: "quantumbtn",
		badge_id: "p3_qu",
		tab: _ => TAB_CORE.open("qu"),

		met: _ => (quantumed && isQuantumReached()) || bigRipped(),
		req: _ => inAnyQC() ? getQCGoal() : getQuantumReq(),
		req_res: _ => inAnyQC() ? player.money : player.meta.bestAntimatter,
		req_log: true,
		req_disp: (amt, req) => inAnyQC() ? `${shorten(amt)} / ${shorten(req)} antimatter` : ECComps("eterc14") ? `${shorten(amt)} / ${shorten(req)} meta-antimatter` : `Complete Eternity Challenge 14 first`
	},
	pos: {
		name: "Positrons",
		met: _ => hasMasteryStudy("d7"),
		req: _ => 50,
		req_res: _ => quantumWorth,
		req_disp: (amt, req) => `${shortenDimensions(amt)} / ${shortenDimensions(req)} net Quarks`
	},
	qc: {
		name: "Quantum Challenges",
		met: _ => hasMasteryStudy("d8"),
		req: _ => 16750,
		req_res: _ => quSave.electrons.amount,
		req_disp: (amt, req) => `${getFullExpansion(amt)} / ${getFullExpansion(req)} Positrons`
	},
	pc: {
		name: "Paired Challenges",
		met: _ => hasMasteryStudy("d9"),
		req: _ => 8,
		req_res: _ => Object.keys(quSave.challenges).length,
		req_disp: (amt, req) => `${getFullExpansion(amt)} / ${getFullExpansion(req)} QC Completions`
	},
	ant: {
		name: "Duplicants",
		badge_id: "p3_ant",
		met: _ => hasMasteryStudy("d10"),
		req: _ => 4,
		req_res: _ => quSave.pairedChallenges.completed,
		req_disp: (amt, req) => `${getFullExpansion(amt)} / ${getFullExpansion(req)} PC Completions`
	},
	ed: {
		name: "Emperor Dimensions",
		met: _ => hasMasteryStudy("d11"),
		req: _ => 10,
		req_res: _ => EDsave[1].perm,
		req_disp: (amt, req) => `${getFullExpansion(amt)} / ${getFullExpansion(req)} worker ants`
	},
	nf: {
		name: "Nanofield",
		met: _ => hasMasteryStudy("d12"),
		req: _ => 10,
		req_res: _ => EDsave[8].perm,
		req_disp: (amt, req) => `${getFullExpansion(amt)} / ${getFullExpansion(req)} of 8th Emperor Dimensions`
	},
	decay: {
		name: "Decay",
		met: _ => hasDecay(),
		req: _ => 16,
		req_res: _ => nfSave.rewards,
		req_disp: (amt, req) => `${getFullExpansion(amt)} / ${getFullExpansion(req)} Nanorewards`
	},
	br: {
		name: "Big Rip",
		tab() {
			el("welcome").style.display = "flex"
			el("welcomeMessage").innerHTML = "Welcome to NG+4, made by Soul147! This mod doesn't do much other than start you with features up to Big Rip."
		},

		met: _ => hasMasteryStudy("d14"),
		req: _ => 24,
		req_res: _ => tmp.qu.chal.pc_comp,
		req_disp: (amt, req) => `${getFullExpansion(amt)} / ${getFullExpansion(req)} PC combinations`
	},
	be: {
		name: "Break Eternity",
		tab: _ => TAB_CORE.open("upg_eter"),

		met: _ => beSave?.unlocked,
		req: _ => E("1e100"),
		req_res: _ => bigRipped() ? player.eternityPoints : 0,
		req_log: true,
		req_disp: (amt, req) => `${shorten(amt)} / ${shorten(req)} Eternity Points while Big Ripped`
	},
	fu: {
		name: "Fundament",
		badge_id: "p3_fu",
		layer: "ghostifybtn",
		tab: _ => TAB_CORE.open("funda"),

		met: _ => (!bigRipped() || isQuantumReached()) && ghostified,
		req: _ => getQCIdGoal([6,8],true),
		req_res: _ => bigRipped() ? player.money : 0,
		req_log: true,
		req_disp: (amt, req) => `${shorten(amt)} / ${shorten(req)} antimatter while Big Ripped`
	},
	ph: {
		name: "Photons",
		tab: _ => TAB_CORE.open("ph"),

		met: _ => PHOTON.unlocked(),
		req: _ => pow10(17e8),
		req_res: _ => bigRipped() ? player.money : 0,
		req_log: true,
		req_disp: (amt, req) => `${shorten(amt)} / ${shorten(req)} antimatter while Big Ripped`
	},
	bl: {
		name: "Bosonic Lab",
		badge_id: "p3_bl",
		tab: _ => TAB_CORE.open("wz"),

		met: _ => WZ_FIELD.unlocked(),
		req: _ => 1,
		req_res: _ => 0,
		req_disp: (amt, req) => `???`
	},
	hb: {
		name: "Higgs Field",
		tab: _ => TAB_CORE.open("hb"),

		met: _ => false,
		req: _ => 1e7,
		req_res: _ => blSave.best_bosons,
		req_log: true,
		req_disp: (amt, req) => `???`
	},

	//Special
	end: {
		name: "🏁 The End 🏁",
		badge_id: "p3_end",

		met: _ => hasAch('ng3p98'),
		req: _ => 1,
		req_res: _ => 0,
		req_disp: (amt, req) => `???`
	}
}
const NGP3_FEATURE_LEN = Object.keys(NGP3_FEATURES).length

let notify_feature_queue
function notifyFeature(k) {
	notify_feature_queue = k
}

function onNotifyFeature(k) {
	NGP3_FEATURES[k].tab?.()
	$.notify("Congratulations! You unlocked " + NGP3_FEATURES[k].name + "!", "success")

	el("ngp3_feature_ani").style.display = ""
	el("ngp3_feature_ani_4").textContent = "You've unlocked " + NGP3_FEATURES[k].name + "!"
	setTimeout(function() {
		el("ngp3_feature_ani_1").style.background = "transparent"
		el("ngp3_feature_ani_2a").style.background = "transparent"
		el("ngp3_feature_ani_2a").style.left = "0"
		el("ngp3_feature_ani_2a").style.top = "0"
		el("ngp3_feature_ani_2a").style.width = "100%"
		el("ngp3_feature_ani_2a").style.height = "100%"
		el("ngp3_feature_ani_2b").style.background = "transparent"
		el("ngp3_feature_ani_2b").style.left = "0"
		el("ngp3_feature_ani_2b").style.top = "0"
		el("ngp3_feature_ani_2b").style.width = "100%"
		el("ngp3_feature_ani_2b").style.height = "100%"
	}, 100)

	setTimeout(function() {
		el("ngp3_feature_ani").style.opacity = 0
	}, 2500)
	setTimeout(function() {
		el("ngp3_feature_ani").style.display = "none"
		el("ngp3_feature_ani").style.opacity = 1
		el("ngp3_feature_ani_1").style.background = "white"
		el("ngp3_feature_ani_2a").style.background = "#7fff00"
		el("ngp3_feature_ani_2a").style.left = "50%"
		el("ngp3_feature_ani_2a").style.top = "50%"
		el("ngp3_feature_ani_2a").style.width = "0"
		el("ngp3_feature_ani_2a").style.height = "0"
		el("ngp3_feature_ani_2b").style.background = "#00ffff"
		el("ngp3_feature_ani_2b").style.left = "50%"
		el("ngp3_feature_ani_2b").style.top = "50%"
		el("ngp3_feature_ani_2b").style.width = "0"
		el("ngp3_feature_ani_2b").style.height = "0"
	}, 3000)
}

function updateNGP3Progress() {
	if (mod.ngp3) {
		tmp.progress = { reached: 0, max: NGP3_FEATURE_LEN - 1 }

		let data = Object.values(NGP3_FEATURES)
		while (NGP3_FEATURE_LEN > tmp.progress.reached - 1 && data[tmp.progress.reached + 1].met()) tmp.progress.reached++
		while (tmp.progress.max > tmp.progress.reached && !data[tmp.progress.max].met()) tmp.progress.max--
	}
	updateNGP3ProgressTab()
}

function doNGP3ProgressBar() {
	let names = Object.keys(NGP3_FEATURES), data = Object.values(NGP3_FEATURES)

	if (NGP3_FEATURE_LEN == tmp.progress.reached - 1) {
		el("progressbar").style.width = "100%"
		el("progresspercent").textContent = "All features unlocked!"
		el("progress").setAttribute('ach-tooltip', `All features unlocked!`)
	} else {
		data = data[tmp.progress.reached + 1]
		let amt = E(data.req_res()) 
		let req = E(data.req())

		var p = Math.min((data.req_log ? amt.max(1).log(req) : amt.div(req).toNumber()) * 100, 100).toFixed(2) + "%"
		el("progressbar").style.width = p
		el("progresspercent").textContent = p
		el("progress").setAttribute('ach-tooltip', `${data.name}: ${data.req_disp(amt, req)} (Stage ${tmp.progress.reached + 1} / ${NGP3_FEATURE_LEN})`)
	}
}

function setupNGP3ProgressTab() {
	let html = ""
	for (let i = 0; i < NGP3_FEATURE_LEN; i++) {
		html += `<td><div class='autoBuyerDiv' id='ngp3_progress_${i}' style='width: 150px; height: 90px'>
			<b style='font-size: 16px'>${Object.values(NGP3_FEATURES)[i].name}</b><br>
			<span id='ngp3_progress_${i}_next'></span>
		</div></td>`
		if (i % 4 == 3) html += "</tr><tr>"
	}
	el("ngp3_progress").innerHTML = html
}

function updateNGP3ProgressTab() {
	el("ngp3_progress_div").style.display = mod.ngp3 ? "" : "none"
	if (!mod.ngp3) return

	let onType = "on"
	for (let i = 0; i < NGP3_FEATURE_LEN; i++) {
		let data = Object.values(NGP3_FEATURES)[i]
		if (data.layer) onType = data.layer

		el("ngp3_progress_"+i).style.display = i <= tmp.progress.max + 1 ? "block" : ""
		el("ngp3_progress_"+i).style.opacity = i != tmp.progress.max ? 0.3 : 1
		el("ngp3_progress_"+i).className = i <= tmp.progress.max ? "autoBuyerDiv " + onType : "autoBuyerDiv"
		el("ngp3_progress_"+i+"_next").innerHTML = i == tmp.progress.max ? "Current<br>" : ""

		if (i == tmp.progress.max + 1) {
			let amt = E(data.req_res()) 
			let req = E(data.req())

			var p = Math.min((data.req_log ? amt.max(1).log(req) : amt.div(req).toNumber()) * 100, 100).toFixed(2) + "%"
			el("ngp3_progress_"+i+"_next").innerHTML = `<b>Next (${p})</b><br>${data.req_disp(amt, req)}<br>`
		}

		if (data.badge_id) el("ngp3_progress_"+i+"_next").innerHTML += hasBadge(data.badge_id) ? "<b class='yellow'>Badge unlocked!</b>" : canGetBadge(data.badge_id) ? `Reward: "${BADGE_TITLE[data.badge_id]}" badge` : ""
	}

}