<script setup>

	defineProps({
		options: Array,
		label: String,
		placeholder: String
	})

</script>
<template>

	<v-select
		:options="options"
		:label="label"
		:placeholder="placeholder"
	/>

</template>

<style lang="scss">

:root {
  --vs-actions-padding: 0;
	--vs-border-radius: 0;
	--vs-selected-color: $c-black;
	--vs-search-input-color: $c-black;
  --vs-search-input-placeholder-color: $c-black;
	--vs-line-height: 1.4;
	--vs-border-color: rgba($c-black, 0.3);
}

.select__clear-icon {
	width: vw(20px);
	height: vw(20px);
	border-radius: 100%;
	background: $c-black;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all .3s ease;
	&:hover {
		transform: rotate(90deg);
	}
	@include max(bg) {
		width: 20px;
		height: 20px;
	}
}
.select__clear-icon:after,
.select__clear-icon:before {
	content: '';
	width: vw(10px);
	height: vw(1px);
	background: $c-white;
	position: absolute;
	top: 50%;
	left: 50%;
	@include max(bg) {
		width: 10px;
		height: 1px;
	}
}

.select__clear-icon:after {
	transform: translate(-50%, -50%) rotate(45deg);
}

.select__clear-icon:before {
	transform: translate(-50%, -50%) rotate(-45deg);
}

.vs__open-indicator {
	width: vw(10px);
	height: vw(5px);
	position: relative;
	@include max(bg) {
		width: 10px;
		height: 5px;
	}
}

.vs__open-indicator:after,
.vs__open-indicator:before {
	content: '';
	width: vw(7px);
	height: vw(1px);
	background: rgba($c-black, 0.7);
	position: absolute;
	top: 0;
	@include max(bg) {
		width: 7px;
		height: 1px;
	}
}

.vs__open-indicator:after {
	left: 0;
	transform: rotate(41deg);
	transform-origin: top left;
}

.vs__open-indicator:before {
	right: 0;
	transform: rotate(-41deg);
	transform-origin: top right;
}

.vs__selected {
	padding: 0;
	margin: 0;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	border: none;
	text-transform: uppercase;
	font-size: vw(11px);
	font-family: $i400;
	padding-bottom: vw(7px);
	white-space: nowrap;
	max-width: 90%;
	overflow: hidden;
	@include max(bg) {
		padding-bottom: 7px;
		font-size: 11px;
	}
}

.vs__selected-options {
	padding: 0;
}

.vs__dropdown-toggle {
	padding: 0;
	border: none;
	border-bottom: vw(1px) solid rgba($c-black, 0.3);
	@include max(bg) {
		border-bottom: 1px solid rgba($c-black, 0.3);
	}
}

.vs--single.vs--open .vs__selected, .vs--single.vs--loading .vs__selected {
	height: 100%;
}

.vs__search, .vs__search:focus {
	padding-left: 0;
	font-size: vw(11px);
	text-transform: uppercase;
	padding-bottom: vw(10px);
	@include max(bg) {
		font-size: 11px;
		padding-bottom: 10px;
	}
}

.vs__actions {
	padding-bottom: vw(7px);
	@include max(bg) {
		padding-bottom: 7px;
	}
}

.vs__search:focus::placeholder {
	opacity: 0.3;
}

.vs__dropdown-menu {
	padding: 0;
	top: 100%;
	box-shadow: none;
	border: vw(1px) solid rgba($c-black, 0.3);
	max-height: vw(200px);
	font-size: vw(11px);
	font-family: $i400;
	@include max(bg) {
		max-height: 200px;
		font-size: 11px;
		border: 1px solid rgba($c-black, 0.3);
	}
}

.vs__dropdown-option {
	padding: vw(10px) vw(20px);
	text-transform: uppercase;
	@include max(bg) {
		padding: 10px 20px;
	}
}

.vs__dropdown-option--highlight {
	background: $c-black;
	color: $c-white;
}

.vs2__listbox {
	text-transform: uppercase;
}



</style>