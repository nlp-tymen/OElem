<template>
  <div>
    <b-container>
      <br />
      <br />
      <h1>Old English Lemmatizer</h1>
      <br />
      <br />
      <b-row>
        <b-col>
          <b-nav-form>
            <b-form-input class="mr-sm-2" placeholder="Add your corpus here"></b-form-input>
            <b-button class="my-2 my-sm-0">Upload</b-button>
          </b-nav-form>
        </b-col>
        <b-col>
          <b-nav-form>
            <b-form-input class="mr-sm-2" placeholder="Enter your word"></b-form-input>
            <b-button class="my-2 my-sm-0">Search</b-button>
          </b-nav-form>
        </b-col>
      </b-row>
      <br />
      <br />
      <div>
        <b-tabs content-class="mt-3" align="center">
          <b-tab title="Lemmatization" active>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>Frequency</th>
                  <th>Word</th>
                  <th>Lemma</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>196</td>
                  <td>ādilgast</td>
                  <td>ādilgian</td>
                </tr>
                <tr>
                  <td>78</td>
                  <td>wæl</td>
                  <td>wæl</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </b-tab>
          <b-tab title="Stemming" disabled="">
            <p>I'm a disabled tab</p>
          </b-tab>
          <b-tab title="POS tagging" disabled="">
            <p>I'm a disabled tab!</p>
          </b-tab>
          </b-tab>
          <b-tab title="Word list" disabled="">
            <p>I'm a disabled tab!</p>
          </b-tab>
        </b-tabs>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
