<template>
	<div class="cartcontrol">
		<transition>
			<div class="cart-decrease" v-show="food.count>0" @click="decreaseCart">
				<span class="inner icon-remove_circle_outline"></span>
			</div>
		</transition>
		<div class="cart-count" v-show="food.count>0">{{food.count}}</div>
		<div class="cart-add icon-add_circle" @click="addCart($event)"></div>
		
	</div>
</template>

<script>
	import Vue from 'vue';
	
	export default {	
		props:{
			food:{
				type:Object
			}
		},
		methods:{
			addCart(event){
				if(!event._constructed){
					return;
				}
				if(!this.food.count){
					Vue.set(this.food,'count',1);
					this.food.count = 1;
				}else{
					this.food.count++;
				}
				this.$emit('cart-add',event.target);
			},
			decreaseCart(){
				if(!event._constructed){
					return;
				}
				if(this.food.count){
					this.food.count--;
				}
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.cartcontrol
		font-size:0
		.cart-decrease
			display:inline-block
			padding:6px
			transform:translate3d(0,0,0)
			&.v-enter,.v-leave-to
				opacity:0
				transform:translate3d(24px,0,0)
			&.v-enter-active,.v-leave-active
				opacity:1
				transition:all .5s ease	
			.inner
				display:inline-block
				line-height:24px
				font-size:24px
				color:rgb(0,160,220)
				transition:all .5s ease
				transform:rotate(0)
				&.v-enter,.v-leave-to
					opacity:0
					transform:rotate(360deg)
				&.v-enter-active,.v-leave-active
					opacity:1
					transition:all .5s ease
		.cart-count
			display:inline-block
			vertical-align:top
			width:12px
			padding-top:6px
			text-align:center
			line-height:24px
			font-size:10px
			color:rgb(147,153,159)
		.cart-add
			display:inline-block
			padding:6px
			line-height:24px
			font-size:24px
			color:rgb(0,160,220)
</style>
