<script>
    import PulledCard from './PulledCard.svelte'

    export let hand = []

    export const PHASES = ["PAST", "PRESENT", "FUTURE"]

</script>

<div class="hand-container">
    <PulledCard givenCard = {hand[0]} phase = {PHASES[0]}/>
    <PulledCard givenCard = {hand[1]} phase = {PHASES[1]}/>
    <PulledCard givenCard = {hand[2]} phase = {PHASES[2]}/>
</div>

<style>
    .hand-container {
        background-color: #120826;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        row-gap: 30px;

        justify-content: space-evenly;
        text-align: center;

        width:575px;
        padding: 20px
    }
</style>
