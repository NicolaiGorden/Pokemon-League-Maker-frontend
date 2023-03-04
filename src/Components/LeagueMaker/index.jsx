import React, { useState, useEffect } from 'react';
import TrainerProfile from '../TrainerProfile';

function LeagueMaker({ setBoxHidden, editingTeam, setEditingTeam, trainerFocus, setTrainerFocus, setSlotFocus, monClick, setMonClick}) {

    const [editingLeague, setEditingLeague] = useState(false)

    const [leagueId, setLeagueId] = useState(undefined)

    const [gym1Id, setGym1Id] = useState()
    const [gym2Id, setGym2Id] = useState()
    const [gym3Id, setGym3Id] = useState()
    const [gym4Id, setGym4Id] = useState()
    const [gym5Id, setGym5Id] = useState()
    const [gym6Id, setGym6Id] = useState()
    const [gym7Id, setGym7Id] = useState()
    const [gym8Id, setGym8Id] = useState()

    const [e41Id, setE41Id] = useState()
    const [e42Id, setE42Id] = useState()
    const [e43Id, setE43Id] = useState()
    const [e44Id, setE44Id] = useState()

    const [championId, setChampionId] = useState()

    const [gym1, setGym1] = useState()
    const [gym2, setGym2] = useState()
    const [gym3, setGym3] = useState()
    const [gym4, setGym4] = useState()
    const [gym5, setGym5] = useState()
    const [gym6, setGym6] = useState()
    const [gym7, setGym7] = useState()
    const [gym8, setGym8] = useState()

    const [e41, setE41] = useState()
    const [e42, setE42] = useState()
    const [e43, setE43] = useState()
    const [e44, setE44] = useState()

    const [champion, setChampion] = useState()


    function handleNewLeague() {
        fetch("http://localhost:9292/leagues", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "New League",
                gym1_id: 0,
                gym2_id: 0,
                gym3_id: 0,
                gym4_id: 0,
                gym5_id: 0,
                gym6_id: 0,
                gym7_id: 0,
                gym8_id: 0,
                e41_id: 0,
                e42_id: 0,
                e43_id: 0,
                e44_id: 0,
                champion_id: 0
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.id)
            setLeagueId(data.id)
            populateLeague(data.id)
            setEditingLeague(true)
        })
    }

    function quickPatch(gym1, gym2, gym3, gym4, gym5, gym6, gym7, gym8, e41, e42, e43, e44, champion, leagueId) {
        fetch(`http://localhost:9292/leagues/${leagueId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                gym1_id: gym1,
                gym2_id: gym2,
                gym3_id: gym3,
                gym4_id: gym4,
                gym5_id: gym5,
                gym6_id: gym6,
                gym7_id: gym7,
                gym8_id: gym8,
                e41_id: e41,
                e42_id: e42,
                e43_id: e43,
                e44_id: e44,
                champion_id: champion
            })
        })
    }

    useEffect(() => {
        quickPatch(gym1Id, gym2Id, gym3Id, gym4Id, gym5Id, gym6Id, gym7Id, gym8Id, e41Id, e42Id, e43Id, e44Id, championId, leagueId)
    }, [championId])

    function populateLeague(leagueId) {
        fetch("http://localhost:9292/trainers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Gym Leader 1",
                occupation: "Gym 1",
                mon1_id: undefined,
                mon2_id: undefined,
                mon3_id: undefined,
                mon4_id: undefined,
                mon5_id: undefined,
                mon6_id: undefined,
                league_id: leagueId,
            })
        })
        .then(res => res.json())
        .then(data => {
            setGym1Id(data.id)
            setGym1(data)
        })
        fetch("http://localhost:9292/trainers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Gym Leader 2",
                occupation: "Gym 2",
                mon1_id: undefined,
                mon2_id: undefined,
                mon3_id: undefined,
                mon4_id: undefined,
                mon5_id: undefined,
                mon6_id: undefined,
                league_id: leagueId,
            })
        })
        .then(res => res.json())
        .then(data => {
            setGym2Id(data.id)
            setGym2(data)
        })
        fetch("http://localhost:9292/trainers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Gym Leader 3",
                occupation: "Gym 3",
                mon1_id: undefined,
                mon2_id: undefined,
                mon3_id: undefined,
                mon4_id: undefined,
                mon5_id: undefined,
                mon6_id: undefined,
                league_id: leagueId,
            })
        })
        .then(res => res.json())
        .then(data => {
            setGym3Id(data.id)
            setGym3(data)
        })
        fetch("http://localhost:9292/trainers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Gym Leader 4",
                occupation: "Gym 4",
                mon1_id: undefined,
                mon2_id: undefined,
                mon3_id: undefined,
                mon4_id: undefined,
                mon5_id: undefined,
                mon6_id: undefined,
                league_id: leagueId,
            })
        })
        .then(res => res.json())
        .then(data => {
            setGym4Id(data.id)
            setGym4(data)
        })
        fetch("http://localhost:9292/trainers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Gym Leader 5",
                occupation: "Gym 5",
                mon1_id: undefined,
                mon2_id: undefined,
                mon3_id: undefined,
                mon4_id: undefined,
                mon5_id: undefined,
                mon6_id: undefined,
                league_id: leagueId,
            })
        })
        .then(res => res.json())
        .then(data => {
            setGym5Id(data.id)
            setGym5(data)
        })
        fetch("http://localhost:9292/trainers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Gym Leader 6",
                occupation: "Gym 6",
                mon1_id: undefined,
                mon2_id: undefined,
                mon3_id: undefined,
                mon4_id: undefined,
                mon5_id: undefined,
                mon6_id: undefined,
                league_id: leagueId,
            })
        })
        .then(res => res.json())
        .then(data => {
            setGym6Id(data.id)
            setGym6(data)
        })
        fetch("http://localhost:9292/trainers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Gym Leader 7",
                occupation: "Gym 7",
                mon1_id: undefined,
                mon2_id: undefined,
                mon3_id: undefined,
                mon4_id: undefined,
                mon5_id: undefined,
                mon6_id: undefined,
                league_id: leagueId,
            })
        })
        .then(res => res.json())
        .then(data => {
            setGym7Id(data.id)
            setGym7(data)
        })
        fetch("http://localhost:9292/trainers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Gym Leader 8",
                occupation: "Gym 8",
                mon1_id: undefined,
                mon2_id: undefined,
                mon3_id: undefined,
                mon4_id: undefined,
                mon5_id: undefined,
                mon6_id: undefined,
                league_id: leagueId,
            })
        })
        .then(res => res.json())
        .then(data => {
            setGym8Id(data.id)
            setGym8(data)
        })
        fetch("http://localhost:9292/trainers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "First Elite 4",
                occupation: "Elite 4-1",
                mon1_id: undefined,
                mon2_id: undefined,
                mon3_id: undefined,
                mon4_id: undefined,
                mon5_id: undefined,
                mon6_id: undefined,
                league_id: leagueId,
            })
        })
        .then(res => res.json())
        .then(data => {
            setE41Id(data.id)
            setE41(data)
        })
        fetch("http://localhost:9292/trainers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Second Elite 4",
                occupation: "Elite 4-2",
                mon1_id: undefined,
                mon2_id: undefined,
                mon3_id: undefined,
                mon4_id: undefined,
                mon5_id: undefined,
                mon6_id: undefined,
                league_id: leagueId,
            })
        })
        .then(res => res.json())
        .then(data => {
            setE42Id(data.id)
            setE42(data)
        })
        fetch("http://localhost:9292/trainers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Third Elite 4",
                occupation: "Elite 4-3",
                mon1_id: undefined,
                mon2_id: undefined,
                mon3_id: undefined,
                mon4_id: undefined,
                mon5_id: undefined,
                mon6_id: undefined,
                league_id: leagueId,
            })
        })
        .then(res => res.json())
        .then(data => {
            setE43Id(data.id)
            setE43(data)
        })
        fetch("http://localhost:9292/trainers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Fourth Elite 4",
                occupation: "Elite 4-4",
                mon1_id: undefined,
                mon2_id: undefined,
                mon3_id: undefined,
                mon4_id: undefined,
                mon5_id: undefined,
                mon6_id: undefined,
                league_id: leagueId,
            })
        })
        .then(res => res.json())
        .then(data => {
            setE44Id(data.id)
            setE44(data)
        })
        fetch("http://localhost:9292/trainers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Champion",
                occupation: "Champion",
                mon1_id: undefined,
                mon2_id: undefined,
                mon3_id: undefined,
                mon4_id: undefined,
                mon5_id: undefined,
                mon6_id: undefined,
                league_id: leagueId,
            })
        })
        .then(res => res.json())
        .then(data => {
            setChampionId(data.id)
            setChampion(data)
        })
    }

    if (editingLeague) {
        return (
            <div class="LM-Content">
                <TrainerProfile trainer= {gym1} setBoxHidden= { setBoxHidden } trainerFocus= {trainerFocus} setTrainerFocus= {setTrainerFocus} setSlotFocus={setSlotFocus} monClick= {monClick} setMonClick= {setMonClick}/>
                <TrainerProfile trainer= {gym2} setBoxHidden= { setBoxHidden } trainerFocus= {trainerFocus} setTrainerFocus= {setTrainerFocus} setSlotFocus={setSlotFocus} monClick= {monClick} setMonClick= {setMonClick}/>
                <TrainerProfile trainer= {gym3} setBoxHidden= { setBoxHidden } trainerFocus= {trainerFocus} setTrainerFocus= {setTrainerFocus} setSlotFocus={setSlotFocus} monClick= {monClick} setMonClick= {setMonClick}/>
                <TrainerProfile trainer= {gym4} setBoxHidden= { setBoxHidden } trainerFocus= {trainerFocus} setTrainerFocus= {setTrainerFocus} setSlotFocus={setSlotFocus} monClick= {monClick} setMonClick= {setMonClick}/>
                <TrainerProfile trainer= {gym5} setBoxHidden= { setBoxHidden } trainerFocus= {trainerFocus} setTrainerFocus= {setTrainerFocus} setSlotFocus={setSlotFocus} monClick= {monClick} setMonClick= {setMonClick}/>
                <TrainerProfile trainer= {gym6} setBoxHidden= { setBoxHidden } trainerFocus= {trainerFocus} setTrainerFocus= {setTrainerFocus} setSlotFocus={setSlotFocus} monClick= {monClick} setMonClick= {setMonClick}/>
                <TrainerProfile trainer= {gym7} setBoxHidden= { setBoxHidden } trainerFocus= {trainerFocus} setTrainerFocus= {setTrainerFocus} setSlotFocus={setSlotFocus} monClick= {monClick} setMonClick= {setMonClick}/>
                <TrainerProfile trainer= {gym8} setBoxHidden= { setBoxHidden } trainerFocus= {trainerFocus} setTrainerFocus= {setTrainerFocus} setSlotFocus={setSlotFocus} monClick= {monClick} setMonClick= {setMonClick}/>
    
                <TrainerProfile trainer= {e41} setBoxHidden= { setBoxHidden } trainerFocus= {trainerFocus} setTrainerFocus= {setTrainerFocus} setSlotFocus={setSlotFocus} monClick= {monClick} setMonClick= {setMonClick}/>
                <TrainerProfile trainer= {e42} setBoxHidden= { setBoxHidden } trainerFocus= {trainerFocus} setTrainerFocus= {setTrainerFocus} setSlotFocus={setSlotFocus} monClick= {monClick} setMonClick= {setMonClick}/>
                <TrainerProfile trainer= {e43} setBoxHidden= { setBoxHidden } trainerFocus= {trainerFocus} setTrainerFocus= {setTrainerFocus} setSlotFocus={setSlotFocus} monClick= {monClick} setMonClick= {setMonClick}/>
                <TrainerProfile trainer= {e44} setBoxHidden= { setBoxHidden } trainerFocus= {trainerFocus} setTrainerFocus= {setTrainerFocus} setSlotFocus={setSlotFocus} monClick= {monClick} setMonClick= {setMonClick}/>
    
                <TrainerProfile trainer= {champion} setBoxHidden= { setBoxHidden }/>
            </div>
        )
    } else {
        return (
            <div class="LM-Content">
                <button onClick={e => handleNewLeague()}>ADD NEW LEAGUE</button>
                <button>EDIT EXISTING LEAGUE</button>
            </div>
        )
    }
}

export default LeagueMaker;