<script lang="ts">
	export let href: string;
	export { className as class };
	let className: string;
</script>

{#if href}
	<a {href} target="_blank" aria-label="GitHub" class="contents">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="transition duration-500 hover:stroke-mint-tulip-500 {className}"
		>
			<title>LinkedIn</title>
			<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
			<rect x="2" y="9" width="4" height="12"></rect>
    		<circle cx="4" cy="4" r="2"></circle>
		</svg>
	</a>
{/if}
