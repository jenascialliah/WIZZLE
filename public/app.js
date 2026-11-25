// WizZle — browser adaptation of the original Tkinter game.
// Design reference: INSTRUCTION MANUAL.pdf, pages 2–15.
// Replace public/app.js with this entire file. Existing assets are required.
'use strict';
const app = document.getElementById('app');
const bgm = document.getElementById('bgm');
const sfxCorrect = document.getElementById('sfx-correct');
const sfxWrong = document.getElementById('sfx-wrong');
const QUESTIONS = {
  "easy": [
    {
      "type": "image-choice",
      "questionImage": "10.png",
      "choices": [
        "q1_4.png",
        "q1_2.png",
        "q1_3.png",
        "q1_1.png"
      ],
      "correct": 1
    },
    {
      "type": "image-choice",
      "questionImage": "11.png",
      "choices": [
        "q2_2.png",
        "q2_1.png",
        "q2_3.png",
        "q2_4.png"
      ],
      "correct": 2
    },
    {
      "type": "image-choice",
      "questionImage": "12.png",
      "choices": [
        "q3_1.png",
        "q3_3.png",
        "q3_2.png",
        "q3_4.png"
      ],
      "correct": 0
    },
    {
      "type": "image-choice",
      "questionImage": "Easy_question_4.png",
      "choices": [
        "Choices E4/q4_1.png",
        "Choices E4/q4_4.png",
        "Choices E4/q4_3Answer.png",
        "Choices E4/q4_2.png"
      ],
      "correct": 2
    },
    {
      "type": "image-choice",
      "questionImage": "Easy_question_5.png",
      "choices": [
        "Choices E4/q5_1Answer.png",
        "Choices E4/q5_2.png",
        "Choices E4/q5_3.png",
        "Choices E4/q5_4.png"
      ],
      "correct": 0
    },
    {
      "type": "image-choice",
      "questionImage": "Easy_question_6.png",
      "choices": [
        "Choices E4/q6_1.png",
        "Choices E4/q6_2.png",
        "Choices E4/q6_3.png",
        "Choices E4/q6_4Answer.png"
      ],
      "correct": 3
    },
    {
      "type": "image-choice",
      "questionImage": "Easy_question_7.png",
      "choices": [
        "Choices E4/q7_2.png",
        "Choices E4/q7_1Answer.png",
        "Choices E4/q7_3.png",
        "Choices E4/q7_4.png"
      ],
      "correct": 1
    },
    {
      "type": "image-choice",
      "questionImage": "Easy_question_8.png",
      "choices": [
        "Choices E4/q8_2Answer.png",
        "Choices E4/q8_1.png",
        "Choices E4/q8_3.png",
        "Choices E4/q8_4.png"
      ],
      "correct": 0
    },
    {
      "type": "image-choice",
      "questionImage": "Easy_question_9.png",
      "choices": [
        "Choices E4/q9_1.png",
        "Choices E4/q9_4.png",
        "Choices E4/q9_3.png",
        "Choices E4/q9_2Answer.png"
      ],
      "correct": 3
    },
    {
      "type": "image-choice",
      "questionImage": "Easy_question_10.png",
      "choices": [
        "Choices E4/q10_1 (1).png",
        "Choices E4/q10_2 (1).png",
        "Choices E4/q10_4Answe (1).png",
        "Choices E4/q10_3 (1).png"
      ],
      "correct": 2
    }
  ],
  "medium": [
    {
      "type": "image-choice",
      "questionImage": "13.png",
      "choices": [
        "mq1_1.png",
        "mq1_2.png",
        "mq1_3.png",
        "mq1_4.png"
      ],
      "correct": 3
    },
    {
      "type": "image-choice",
      "questionImage": "14.png",
      "choices": [
        "mq2_1.png",
        "mq2_3.png",
        "mq2_4.png",
        "mq2_2.png"
      ],
      "correct": 1
    },
    {
      "type": "image-choice",
      "questionImage": "15.png",
      "choices": [
        "mq3_1.png",
        "mq3_3.png",
        "mq3_2.png",
        "mq3_4.png"
      ],
      "correct": 2
    },
    {
      "type": "image-choice",
      "questionImage": "Q#4.png",
      "choices": [
        "Choices M4/choice 1.png",
        "Choices M4/choices 3.png",
        "Choices M4/q4_4_Med.png",
        "Choices M4/q4_Answer2_med.png"
      ],
      "correct": 3
    },
    {
      "type": "image-choice",
      "questionImage": "Q#5.png",
      "choices": [
        "Choices M4/choice 2 (1).png",
        "Choices M4/choice 3Answer (1).png",
        "Choices M4/choice 4 (1).png",
        "Choices M4/choice 1 (1).png"
      ],
      "correct": 1
    },
    {
      "type": "image-choice",
      "questionImage": "Q#6.png",
      "choices": [
        "Choices M4/6choice 4 (1).png",
        "Choices M4/6choice 3 (1).png",
        "Choices M4/6choice 2Answer (1).png",
        "Choices M4/6choice 1 (1).png"
      ],
      "correct": 2
    },
    {
      "type": "image-choice",
      "questionImage": "Q#7.png",
      "choices": [
        "Choices M4/choice 2Answer_7 (1).png",
        "Choices M4/choice 1_7 (1).png",
        "Choices M4/choice 4_7 (1).png",
        "Choices M4/choice 3_7 (1).png"
      ],
      "correct": 0
    },
    {
      "type": "image-choice",
      "questionImage": "Q#8.png",
      "choices": [
        "Choices M4/8_choice 2 (1).png",
        "Choices M4/8_choice 1Answer (1).png",
        "Choices M4/8_choice 4 (1).png",
        "Choices M4/8_choice 3 (1).png"
      ],
      "correct": 1
    },
    {
      "type": "image-choice",
      "questionImage": "Q#9.png",
      "choices": [
        "Choices M4/9_choice 4 (1).png",
        "Choices M4/9_choice 3 (1).png",
        "Choices M4/9_choice 1 (1).png",
        "Choices M4/9_choice 2Answer (1).png"
      ],
      "correct": 3
    },
    {
      "type": "image-choice",
      "questionImage": "Q#10.png",
      "choices": [
        "Choices M4/10_choice 4 (1).png",
        "Choices M4/10_choice 3 (1).png",
        "Choices M4/10_choice 1Answer (1).png",
        "Choices M4/10_choice 2 (1).png"
      ],
      "correct": 2
    }
  ],
  "hard": [
    {
      "type": "text-image",
      "questionImage": "16.png",
      "answer": "Queue",
      "hintImage": "25.png"
    },
    {
      "type": "text-image",
      "questionImage": "18.png",
      "answer": "Butterfly",
      "hintImage": "26.png"
    },
    {
      "type": "text-image",
      "questionImage": "19.png",
      "answer": "Mask",
      "hintImage": "27.png"
    },
    {
      "type": "text-image",
      "questionImage": "Hard_question_4.png",
      "answer": "Idea",
      "hintImage": "Hint 4-10/Hint_Q4.png"
    },
    {
      "type": "text-image",
      "questionImage": "Hard_question_5.png",
      "answer": "Globe",
      "hintImage": "Hint 4-10/Hint_Q5.png"
    },
    {
      "type": "text-image",
      "questionImage": "Hard_question_6.png",
      "answer": "Cold",
      "hintImage": "Hint 4-10/Hint_Q6.png"
    },
    {
      "type": "text-image",
      "questionImage": "Hard_question_7.png",
      "answer": "Stapler",
      "hintImage": "Hint 4-10/Hint_Q7.png"
    },
    {
      "type": "text-image",
      "questionImage": "Hard_question_8.png",
      "answer": "Wave",
      "hintImage": "Hint 4-10/Hint_Q8.png"
    },
    {
      "type": "text-image",
      "questionImage": "Hard_question_9.png",
      "answer": "Sand",
      "hintImage": "Hint 4-10/Hint_Q9.png"
    },
    {
      "type": "text-image",
      "questionImage": "Hard_question_10.png",
      "answer": "Wheat",
      "hintImage": "Hint 4-10/Hint_Q10.png"
    }
  ]
};

const state = {screen:'title',level:null,index:0,score:0,music:false,tutorial:0,phase:'menu'};
const tutorialPages = ['Tutorial.png','Tutorial (2).png','Tutorial (4).png'];
const url = file => 'assets/' + file.split('/').map(encodeURIComponent).join('/');
const question = () => QUESTIONS[state.level][state.index];
const total = () => QUESTIONS[state.level].length;
function el(tag, cls, parent){const e=document.createElement(tag); if(cls)e.className=cls; if(parent)parent.append(e); return e;}
function pos(e,x,y,w,h){Object.assign(e.style,{left:x+'%',top:y+'%',width:w+'%',height:h+'%'}); return e;}
function screen(file,name){
  app.replaceChildren(); state.screen=name; app.dataset.wizzleScreen=name;
  const stage=el('div','wz-stage',app); stage.style.backgroundImage=`url("${url(file)}")`;
  return stage;
}
function button(parent,file,label,x,y,w,h,action){
 const b=pos(el('button','wz-button',parent),x,y,w,h); b.type='button'; b.setAttribute('aria-label',label);
 const img=el('img','',b); img.src=url(file); img.alt=label; img.draggable=false;
 b.addEventListener('click',action);return b;
}
function back(stage,fn){return button(stage,'back.png','Back',17,92,28,8.5,fn);}
function setMusic(on){
 state.music=Boolean(on); if(!bgm)return;
 if(state.music){bgm.volume=.45; bgm.play().catch(()=>{state.music=false;if(state.screen==='settings')renderSettings();});}else bgm.pause();
}
function sound(correct){const a=correct?sfxCorrect:sfxWrong;if(a){a.currentTime=0;a.play().catch(()=>{});}}
function renderTitle(){
 state.phase='menu'; const s=screen('homescreen.gif','title');
 button(s,'Start Button.png','Start',50,70,30,9.5,renderMenu);
 button(s,'credit button.png','Credits',50,84,30,9.5,renderCredits);
}
function renderMenu(){
 state.phase='menu'; const s=screen('select level.png','menu');
 const title=pos(el('div','wz-welcome',s),50,25,70,9); title.textContent='Welcome to WizZle!';
 button(s,'startgame_button.png','Start game',50,42,30,9.5,renderLevels);
 button(s,'how_toPlay button.png','How to play',50,59,30,9.5,()=>renderTutorial(0));
 button(s,'settings_button.png','Settings',50,75,30,9.5,renderSettings);
 back(s,renderTitle);
}
function renderCredits(){state.phase='menu';const s=screen('Credits.png','credits');back(s,renderTitle);}
function renderTutorial(i=0){
 state.phase='menu'; state.tutorial=i; const s=screen(tutorialPages[i],'tutorial');
 back(s,()=>i===0?renderMenu():renderTutorial(i-1));
 const last=i===tutorialPages.length-1;
 button(s,last?'play.png':'next_button (1).png',last?'Play':'Next',83,92,28,8.5,()=>last?renderLevels():renderTutorial(i+1));
}
function renderSettings(){
 state.phase='menu';const s=screen('settings_bg.png','settings');
 const toggle=button(s,state.music?'on_toggle.png':'off_toggle.png',state.music?'Turn music off':'Turn music on',50,48,18,7,()=>{setMusic(!state.music);renderSettings();});toggle.setAttribute('aria-pressed',String(state.music));
 button(s,'home_button.png','Return to title screen',50,62,28,9,()=>{setMusic(false);state.level=null;state.index=0;state.score=0;renderTitle();});
 back(s,renderMenu);
}
function renderLevels(){
 state.phase='menu'; const s=screen('select difficulty.png','levels');
 ['easy','medium','hard'].forEach((level,i)=>button(s,level+'_button.png',level[0].toUpperCase()+level.slice(1),50,34+17*i,30,9.5,()=>startLevel(level)));
 back(s,renderMenu);
}
function startLevel(level){
 if(!Object.hasOwn(QUESTIONS,level))return;
 state.level=level;state.index=0;state.score=0;renderQuestion();
}
function renderQuestion(){
 state.phase='question';const q=question();const s=screen(q.questionImage,'question');
 if(q.type==='image-choice'){
  q.choices.forEach((file,i)=>button(s,file,'Answer choice '+(i+1),50,50+i*11.7,30,9.6,()=>submit(i===q.correct)));
 }else{
  const form=el('form','wz-answer-form',s);
  const input=pos(el('input','wz-input',form),52,62.2,62,5.7);input.id='answer-input';input.autocomplete='off';input.spellcheck=false;input.setAttribute('aria-label','Type your answer');
  button(form,'enter_button.png','Enter',52,70.5,24,6.7,()=>form.requestSubmit());
  form.addEventListener('submit',e=>{e.preventDefault();const value=input.value.trim().toLowerCase();if(value)submit(value===q.answer.trim().toLowerCase());else input.focus();});
  button(s,'hint_button.png','Hint',87,5,24,6.5,()=>renderHint(s));
 }
 // Small exit control outside the original question panel for the public demo.
 const exit=el('button','wz-exit',s);exit.type='button';exit.textContent='Back to levels';exit.addEventListener('click',()=>{if(window.confirm('Return to the difficulty menu? This round will reset.'))renderLevels();});
}
function renderHint(stage){
 if(state.phase!=='question'||stage.querySelector('.wz-modal'))return;
 state.phase='hint';const overlay=el('div','wz-modal',stage);overlay.setAttribute('role','dialog');overlay.setAttribute('aria-modal','true');overlay.setAttribute('aria-label','Hint');
 const box=el('div','wz-hint-box',overlay);const img=el('img','wz-hint-img',box);img.src=url(question().hintImage);img.alt='Original riddle hint';
 const dismiss=()=>{overlay.remove();state.phase='question';stage.querySelector('[aria-label="Hint"]').focus();};
 const b=button(box,'back.png','Close hint',81,88,28,15,dismiss);b.focus();
 overlay.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();dismiss();}if(e.key==='Tab'){e.preventDefault();b.focus();}});
}
function submit(correct){
 if(state.phase!=='question')return;
 state.phase=correct?'correct':'retry';sound(correct);
 if(correct){state.score++;renderScore();}else renderRetry();
}
function renderRetry(){
 state.phase='retry';const s=screen('try_again.png','retry');
 button(s,'restart_button.png','Restart this question',22,86,30,9.5,renderQuestion);
}
function renderScore(){
 state.phase='correct';const s=screen('templatefor_scoreboard.gif','score');
 const n=pos(el('div','wz-score',s),50,52,43,15);n.textContent=state.score+'/'+total();n.setAttribute('aria-live','polite');
 button(s,'next_button (1).png',state.index===total()-1?'Finish level':'Next question',79,85,30,9.5,()=>{
  if(state.phase!=='correct')return;
  if(state.index+1<total()){state.index++;renderQuestion();}else renderComplete();
 });
}
function renderComplete(){
 state.phase='finished';const s=screen('templatefor_scoreboard.gif','complete');
 const n=pos(el('div','wz-score',s),50,52,43,15);n.textContent=state.score+'/'+total();
 button(s,'home_button.png','Return to menu',22,86,30,9.5,renderMenu);
 const next={easy:'medium',medium:'hard'}[state.level];
 if(next)button(s,next+'_button.png','Play '+next,79,86,30,9.5,()=>startLevel(next));
 else button(s,'restart_button.png','Replay Hard',79,86,30,9.5,()=>startLevel('hard'));
}
// CSS is bundled to avoid requiring any changes to the existing stylesheet.
const css=document.createElement('style');css.textContent=`
html,body{margin:0;min-height:100%;background:radial-gradient(ellipse at top,#3a2452,#120a1f 75%);}
body{display:flex;align-items:center;justify-content:center;min-height:100dvh;padding:12px;box-sizing:border-box;}
#app{position:relative!important;width:min(500px,calc(100vw - 24px),calc((100vh - 24px)*.8))!important;width:min(500px,calc(100vw - 24px),calc((100dvh - 24px)*.8))!important;height:auto!important;aspect-ratio:4/5;flex:none;container-type:inline-size;overflow:hidden;border-radius:12px;background:#2b1640;box-shadow:0 16px 55px #0007;}
#app .wz-stage{position:absolute;inset:0;background-size:100% 100%;background-repeat:no-repeat;background-position:center;isolation:isolate;}
#app .wz-button{position:absolute;display:block;transform:translate(-50%,-50%);padding:0;margin:0;border:0;background:none;cursor:pointer;transition:scale .14s ease,filter .14s ease;touch-action:manipulation;}
#app .wz-button img{display:block;width:100%;height:100%;object-fit:contain;user-select:none;pointer-events:none;}
@media(hover:hover){#app .wz-button:hover{scale:1.045;filter:brightness(1.12) drop-shadow(0 2px 4px #30144c88);}}
#app .wz-button:active{scale:.96;filter:brightness(.92);}
#app button:focus-visible,#app input:focus-visible{outline:2px solid white;outline-offset:3px;}
#app .wz-welcome,#app .wz-score{position:absolute;transform:translate(-50%,-50%);display:grid;place-items:center;text-align:center;color:white;font-family:'Monotype Corsiva','Palatino Linotype',Georgia,serif;font-style:italic;font-weight:normal;white-space:nowrap;}
#app .wz-welcome{font-size:5.6cqw;text-shadow:0 1px 2px #4f2779;}
#app .wz-score{font-size:13cqw;text-shadow:0 1px 3px #5a3485;}
#app .wz-answer-form{position:absolute;inset:0;pointer-events:none;}
#app .wz-answer-form>*{pointer-events:auto;}
#app .wz-input{position:absolute;transform:translate(-50%,-50%);box-sizing:border-box;background:#fff;color:#231330;border:1px solid #c9a8df;border-radius:0;text-align:center;padding:0 8px;font-size:4.4cqw;}
#app .wz-exit{position:absolute;left:2%;bottom:1%;color:#fff;background:#35174c;border:0;border-radius:3px;padding:3px 6px;font-size:2.2cqw;opacity:.85;}
#app .wz-exit:focus-visible,#app .wz-exit:hover{opacity:1;}
#app .wz-modal{position:absolute;inset:0;display:grid;place-items:center;background:#170c2b9c;z-index:10;}
#app .wz-hint-box{position:relative;width:88%;aspect-ratio:380/270;box-shadow:0 6px 22px #0007;border:2px solid #c9a8df;}
#app .wz-hint-img{width:100%;height:100%;display:block;}
@media(prefers-reduced-motion:reduce){#app .wz-button{transition:none;}#app .wz-button:hover,#app .wz-button:active{scale:1;}}
`;document.head.append(css);
renderTitle();