<script>
    import { Link } from "svelte-routing";
    import { storage } from "firebase/app";
    import "firebase/storage";
    //import { onMount, onDestroy } from 'svelte';

    export let char;

    let avatarUrl;

    if (char.avatar) {
        const storageRef = storage().ref();
        storageRef
            .child(char.avatar)
            .getDownloadURL()
            .then(function (url) {
                avatarUrl = url;
            });
    }
</script>

<div class="box">
    <article class="media">
        <div class="media-left">
            <figure class="image is-64x64">
                {#if avatarUrl}
                    <img src={avatarUrl} alt={`Image of ${char.name}`} />
                {/if}
            </figure>
        </div>
        <div class="media-content">
            <div class="content">
                <p class="title">{char.name}</p>
            </div>
        </div>
    </article>
</div>

<style>
</style>
