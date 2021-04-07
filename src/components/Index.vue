<template>
    <div class="content">

        <el-card shadow="always" v-for="item in items" :key="item.name">
            <div @click="editRules(item)">{{item.name}}</div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "Index",
        created() {
            let that = this;
            this.$axios.get(`drools/drl/all`).then(res => {
                that.items = res.data;
                console.log(that.items);
            })
        },
        data() {
            return {
                items: []
            }
        },
        methods: {
            editRules(item) {
                this.$axios.get(`drools/drl/bpmns`, {
                    params: {
                        id: item.name
                    }
                }).then(res => {
                    this.xmlStr.xmlStr = res.data;
                    this.$router.push({path:'/custom-properties-panel'})
                })
            }
        }
    }
</script>

<style scoped>
    .content {
        margin: 10vh auto 0;
        width: 80vw;
    }
</style>
