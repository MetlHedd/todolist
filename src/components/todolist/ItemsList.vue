<template>
  <div class="app">
    <h1 class="title">To-Do List Items</h1>
    <h2 class="subtitle">You are seeing 20 items per page</h2>
    <hr>
    <b-tabs v-model="activeTab" @change="tabChange" type="is-toggle" expanded>
      <b-tab-item label="Activive" icon="clipboard-list-outline"></b-tab-item>
      <b-tab-item label="Inactive" icon="checkbox-marked-circle-outline"></b-tab-item>
      <b-tab-item label="Archived" icon="archive-outline"></b-tab-item>
    </b-tabs>
    <ul class="block-list is-normal is-outlined has-radius">
      <li v-for="(item, key) in items" v-bind:key="key">
        <nav class="level">
          <div class="level-left">
            <div class="level-item block">
              <b-icon icon="file-multiple"></b-icon>
              <router-link :to="'/tasks/see/' + item._id">{{item.title}}</router-link>
            </div>
          </div>
          <div class="levem-item">
            <div>
              <b-field grouped group-multiline>
                <div class="control">
                  <b-taglist attached>
                    <b-tag size="is-small" type="is-dark">
                      <b-icon icon="calendar" size="is-small"></b-icon>
                    </b-tag>
                    <b-tag size="is-small" type="is-warning">
                      19/03/2020 - 18:57
                    </b-tag>
                  </b-taglist>
                </div>
                <div class="control" v-for="tag in item.tags" v-bind:key="'tag_' + tag">
                  <b-taglist attached>
                    <b-tag size="is-small" type="is-dark">
                      <b-icon icon="tag" size="is-small"></b-icon>
                    </b-tag>
                    <b-tag size="is-small" type="is-info">
                      {{tag}}
                    </b-tag>
                  </b-taglist>
                </div>
                <div class="control" v-for="project in item.projects" v-bind:key="'pr_' + project">
                  <b-taglist attached>
                    <b-tag size="is-small" type="is-dark">
                      <b-icon icon="folder-network" size="is-small"></b-icon>
                    </b-tag>
                    <b-tag size="is-small" type="is-primary">
                      {{project}}
                    </b-tag>
                  </b-taglist>
                </div>
              </b-field>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <div class="buttons">
                <b-button type="is-success" icon-right="check-circle" @click="invertDoneTask(item);tabChange()"></b-button>
                <b-button type="is-link" icon-right="pencil" tag="router-link" :to="'/tasks/edit/' + item._id"></b-button>
                <b-button type="is-warning" icon-right="archive" @click="invertArchiveTask(item);tabChange()"></b-button>
                <b-button type="is-danger" icon-right="delete" @click="deleteTask(item);tabChange()"></b-button>
              </div>
            </div>
          </div>
        </nav>
      </li>
    </ul>
    <hr>
    <b-pagination :total="$parent.pages.numberOfItems" :per-page="$parent.pages.itemsPerPage" order="is-centered" :current.sync="$parent.pages.currentPage" @change="pageChanged" range-before="3" range-after="1" aria-next-label="Next page" aria-previous-label="Previous page" aria-page-label="Page" aria-current-label="Current page"></b-pagination>
  </div>
</template>

<style lang="scss">
/*
MIT License

Copyright (c) 2019 CS Rhymes

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
@charset "utf-8";
@import "~bulma/bulma";

$block-list-separator: 0.25rem !default;

.block-list {
    list-style-type: none;

    li {
        padding: ($gap / 2);
        background: $light;
        margin-bottom: $block-list-separator;
    }

    &.is-left {
        li {
            text-align: left;
        }
    }

    &.is-centered {
        li {
            text-align: center;
        }
    }

    &.is-right {
        li {
            text-align: right;
        }
    }

    &.is-small {
        li {
            font-size: $small-font-size;
            padding: ($gap / 3);
        }
    }

    &.is-normal {
      li {
        font-size: $body-font-size;
      }
    }

    &.is-large {
        li {
            font-size: $size-large;
        }
    }

    @each $name, $pair in $colors {

        $color: nth($pair, 1);
        $color-invert: nth($pair, 2);

        &.is-#{$name} {
            li {
                background: $color;
                color: $color-invert;
            }

            &.is-outlined {
                li {
                    background: transparent;
                    color: $color;
                    border: 1px solid $color;
                }
            }

            &.has-radius {
                li {
                    border-radius: $radius;
                }
            }
        }
    }

}
</style>

<script>
export default {
  name: 'TodoListItemsList',
  data () {
    return {
      items: {},
      oldPage: 1,
      activeTab: 0
    }
  },
  created: function () {
    this.$parent.$on('newItems', (items) => {
      this.items = items

      if (items.length > 0) {
        this.$parent.lastKey = items[items.length - 1]._id
        this.$parent.firstKey = items[0]._id
      }
    })
  },
  methods: {
    tabChange: function () {
      if (this.activeTab === 0) {
        this.$parent.$emit('requestForItems', true, false)
      } else if (this.activeTab === 1) {
        this.$parent.$emit('requestForItems', false, false)
      } else {
        this.$parent.$emit('requestForItems', false, true)
      }
    },
    pageChanged: function (page) {
      if (page > this.$parent.pages.currentPage) {
        this.$parent.nextPage()
      } else {
        this.$parent.backPage()
      }
    }
  }
}
</script>
