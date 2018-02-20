<!-- #1 -->
<template>
  <div>
  	<section>
  		Do it! Vue.js 입문
  	</section>
		<p>
			출간 기념 공개 세미나
		</p>
  </div>
</template>

<!-- #2 -->
<script>
	render: function (createElement) {
		return createElement('div', [
			createElement(
				'section',
				'Do it! Vue.js 입문'),
			createElement(
				'p',
				'출간 기념 공개 세미나')
		]);
	}
</script>
