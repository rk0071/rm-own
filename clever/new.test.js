const expect = require('expect');
const request = require('supertest');
const {app} = require('./../nike/perfect.js');
const {Rom} = require('./../pole/entire.js');
var doc = [{
  text : "hi bae"
},
{
  text : "hi bae"
}]
beforeEach((done) =>
{
  Rom.deleteMany({}).then(() =>
{
   Rom.insertMany(doc);
 }).then(() => done());
});

describe('whaat',() =>
{
  it('should be an value',(done) =>
{

  request(app)
   .get('/todo')
   .expect(200)
   .expect((res) =>
 {
   expect(res.body.length).toBe(2)
 })
 .end(done);
});
});

describe('mine',() =>
{
  it('should have valid',(done) =>
{
  var text = "hi bae";
  request(app)
  .post('/todo')
  .send({text})
  .expect(200)
  .expect((res) =>
  {
    expect(res.body.text).toBe(text)
  })
  .end((err,res) =>
  {
    if(err)
    {
      return done(err);
    }
    Rom.find().then((doc) =>
    {
            expect(doc[0].text) .toBe(text);
            done();

  }).catch((err) => done(err));
});
});
})
