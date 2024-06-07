<script setup lang="ts">
import UpdateForm from '@/components/UpdateForm.vue';
import Skeleton from 'primevue/skeleton';
</script>


<template>
    <Suspense>

        <UpdateForm></UpdateForm>

        <template #fallback>
            <div>
                <Skeleton class="mb-2"></Skeleton>
                <Skeleton width="10rem" class="mb-2"></Skeleton>
                <Skeleton width="5rem" class="mb-2"></Skeleton>
                <Skeleton height="2rem" class="mb-2"></Skeleton>
                <Skeleton width="10rem" height="4rem"></Skeleton>
            </div>

        </template>


    </Suspense>

</template>